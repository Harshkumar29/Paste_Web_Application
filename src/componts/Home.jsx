import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const Home = () => {
    const [tittle, settittle] = useState('');
    const [value, setvalue] = useState('')
    const [searchParams,setSearchParam]=useSearchParams();
    const allpastes=useSelector((state)=>state.paste.Pastes);
    const pasteId=searchParams.get('pasteId');
    const dispatch = useDispatch();
    useEffect(() => {
      if (pasteId) {
        const paste=allpastes.find((e)=>e._id===pasteId);
        settittle(paste.title);
        setvalue(paste.content);    
      }
    }, [pasteId])
    
    function createPaste(){
        const paste={
            title:tittle,
            content:value,
            _id:pasteId||Math.floor(Math.random()*1000).toLocaleString(),
            createdAt: new Date().toISOString(),
        }
        if (pasteId) {
            dispatch(updateToPastes(paste));
        }else{
            dispatch(addToPastes(paste));
        }
        settittle('');
        setvalue('');
        setSearchParam({});
    }
  return (
    <div className='w-screen'>
    <div className='flex justify-center mt-10 gap-8'>
        <input type='text' className='border rounded-md p-2 bg-slate-200 focus:border-gray-300
        active:border-gray-400 'placeholder='Enter Tittle here'value={tittle} onChange={(e)=>settittle(e.target.value)}/>
       <button 
       onClick={createPaste}
       className='bg-[#111] border rounded-md text-white p-2'>
        {pasteId?'Update Paste':'Create My newPaste'}</button>
    </div>
        <div className='flex justify-center mt-10'>
            <textarea value={value} onChange={(e)=>setvalue(e.target.value)} rows={12} cols={70}
            className='bg-gray-100 rounded-md p-5 border border-gray-400 focus:border focus:border-gray-500
            text-lg'></textarea>
        </div>
    </div>
  )
}

export default Home