import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromPastes } from '../redux/pasteSlice';

const Pages = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.Pastes);
  console.log(allPastes);
  const filterData = allPastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function handleShare(pasteId) {
    const links="https://paste-web-application-mu.vercel.app/pastes/"+pasteId;
    navigator.clipboard.writeText(links);
    toast.success('Link Copied Successfully!!')
  }
  return (
    <div className='w-screen'>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <input type="text" value={searchTerm} placeholder='Search Your paste' 
        className='w-1/2 h-14 p-4 border border-gray-400 text-base rounded 
        bg-slate-100 placeholder:text-gray-500' onChange={(e)=> setsearchTerm(e.target.value)}/>
        <div className='w-1/2 mt-1 p-2 border border-gray-300 rounded overflow-y-auto scroll-smooth h-96 bg-slate-100 flex flex-col'>
          {
            filterData.length > 0 && filterData.map((paste) => {
              return (
                <div className='w-full h-auto border flex justify-between items-center border-gray-800 p-5 rounded mb-1' key={paste._id}>
                  <div className='flex flex-col justify-center items-start'>
                    <h5 className='text-base font-medium uppercase text-gray-800'>{paste.title}</h5>
                    <h4 className='text-base font-medium uppercase text-gray-800'>{paste.content}</h4>
                    <h5 className='text-green-800 font-medium'>{paste.createdAt}</h5>
                  </div>
                  <div className='flex flex-wrap gap-2 p-2'>
                    <button className='p-2 border border-gray-500 active:scale-90'>
                      <Link to={`/?pasteId=${paste._id}`}>
                        Edit
                      </Link>
                    </button>
                    <button className='p-2 border border-gray-500 active:scale-90'>
                      <Link to={`/pastes/` + paste._id}>
                        View
                      </Link>
                    </button>
                    <button className='p-2 border border-gray-500 active:scale-90' onClick={() => handleDelete(paste?._id)}>Delete</button>
                    <button className='p-2 border border-gray-500 active:scale-90' onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Content copied Successfully!!")
                    }}>Copy</button>
                    <button className='p-2 border border-gray-500 active:scale-90' onClick={() => handleShare(paste?._id)}>Share</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Pages