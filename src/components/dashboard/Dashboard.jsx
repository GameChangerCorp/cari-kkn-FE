import Cookies from 'js-cookie';
import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import ListKKN from './content/ListKKN';


const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    Cookies.remove('token')
    navigate('/')

  }

  return (
<div className='flex flex-row-reverse'>
      <div className=" w-4/5 h-screen bg-secondColor border-gray-200 px-2 sm:px-4 py-2.5 ">
        <div className="container mx-auto">
          <ListKKN/>
        </div>
      </div>

    <aside className="w-1/5 " aria-label="Sidebar">
      <div className="overflow-y-auto flex flex-col justify-between  py-4 px-3 bg-gray-50 rounded h-screen dark:bg-gray-800">
        <div>
        <Link to={'/dashboard'} className="flex flex-col gap-4 items-center pl-2.5 mb-5">
          <img src="./assets/Logo-kkn.png" className=" w-24 " alt="Logo KKN" />
          <p className="self-center text-xl font-semibold block dark:text-white">KKN Bangkit</p>
        </Link>
        <ul className="space-y-6">
          <li>
            <Link  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
        </ul>
        </div>
        <button onClick={handleLogin} className="flex w-2/5 bg-mainColor justify-center items-center p-2 align-center  font-normal text-white rounded-lg hover:bg-gray-100 hover:text-black"> Keluar </button>
      </div>
    </aside>

</div>

  
  )
}

export default Dashboard