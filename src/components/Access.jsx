import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Access = () => {

    const id = 'superadmin@gmail.com'
    const pass = 'Super';
    const navigate = useNavigate()
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [isAccess, setIsAccess] = useState(false);


    const handleAccess = (e)=>{
        e.preventDefault();
        if((userId == id) && (password == pass)){
            setIsAccess(true);
            <ProtectedRoute isAccess={isAccess}/>
           return navigate('/admin');
        }
        console.log(password);
        setErr(true);
        setUserId('')
        setPassword('');
    }

  return (
    <div className=' h-screen flex justify-center items-center w-full bg-black'>
        <div className=' w-96 h-80 bg-gray-400 flex justify-center items-center'>
            <form onSubmit={handleAccess} className=' w-full h-full p-10 flex flex-col gap-3'>
                <label>User Id</label>
                <input type="text" placeholder='userid' onChange={(e)=>setUserId(e.target.value)} className=' outline-none py-2 px-2'/>
                <label>Password</label>
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} className=' outline-none py-2 px-2'/>
                <input type="submit" placeholder='access' className=' bg-blue-400 text-white py-2 px-5 mt-5 cursor-pointer'/>
            </form>
            {err &&
            <span className=' text-red-500'>Wrong Credentials</span>
            }
        </div>
    </div>
  )
}

export default Access