import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const LoginPage = () => {
    const [input, setInput] = useState({
        username : "",
        password : ""
    })

    const navigate = useNavigate();


    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let {username, password} = input

        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://cari-kkn-be.fly.dev/admin/login',
            data: {username , password},
        })
        .then((res) => {
            let {token} = res.data
            Cookies.set('token', token)
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className="container h-screen max-w-full bg-gray-50 flex justify-center items-center">
        <div className="w-96 h-4/5 py-4 bg-mainColor rounded-lg drop-shadow-2xl">
            <div className="h-2/5 flex flex-col gap-3 justify-center items-center p-5">
                <h1 className="text-2xl font-bold text-white">Welcome</h1>
                <img src="./assets/logo-kkn.png" alt="logo" className='w-24'/>
                <h3 className="text-xl text-white">Login</h3>
            </div>
            <form onSubmit={handleLogin}>
            <div className="px-5 py-1">
                <label className="block text-white">Username</label>
                <input type="text" onChange={handleChange} value={input.username} name="username" className="w-full block rounded-lg border-none"/>
            </div>
            <div className="px-5 py-1" >
                <label className="block text-white">Password</label>
                <input type="password" onChange={handleChange} value={input.password} name='password' className="w-full block rounded-lg border-none"/>
            </div>
            <div className=' px-5 flex justify-center items-center '>
                <button type='submit' className='bg-grayColor w-full text-mainColor mt-5 py-2 px-4 rounded-lg drop-shadow-2xl hover:bg-blue-300 text-white'>Masuk</button>
            </div>
            </form>

            
        </div>
    </div>
  )
}

export default LoginPage