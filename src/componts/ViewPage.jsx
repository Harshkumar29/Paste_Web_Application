import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPage = () => {
  const allpaste=useSelector((state)=>state.paste.Pastes);
  const{id}=useParams();
  console.log(id);
  const paste=allpaste.find((e)=>e._id===id);
  // console.log(allpaste);
  return (
    <div className='w-screen'>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='flex justify-between w-1/2'>
        <input type="text" value={paste.title} placeholder='Search Your paste' 
        className='w-1/2 h-14 p-4 border border-gray-400 text-base rounded 
        bg-slate-100 placeholder:text-gray-500'/>
        <div className='w-20 h-14 border border-gray-900 p-2 active:scale-90 rounded-lg'
        onClick={()=>{
          navigator.clipboard.writeText(paste.content)
          toast.success('Content copied!!')
        }}>
          <h2 className='font-medium text-2xl text-center'>Copy</h2>
        </div>
        </div>
        <div className='w-1/2 mt-1 p-2 border border-gray-300 rounded overflow-y-auto scroll-smooth h-96 bg-slate-100 flex flex-col'>
          <h2>{paste.content}</h2>
        </div>
      </div>
    </div>
  )
}

export default ViewPage