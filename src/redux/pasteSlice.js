import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    Pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))
    :[]
  },
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      const key=localStorage.getItem('pastes');
      const vle=state.Pastes.findIndex((e)=>e.title===paste.title);
      if (key==null) {
        state.Pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.Pastes));
        toast.success('Paste Created SuccessFully!!')
      }else if (key!=null && vle<0) {
        state.Pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.Pastes));
        toast.success('Paste Created SuccessFully!!')
      }else{
        toast.error('Paste Already Exists!!')
      }
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index=state.Pastes.findIndex((item)=>item._id===paste._id);
      console.log(index)
      if (index>=0) {
        state.Pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.Pastes));
        toast.success('Paste Updated Successfully!!');
      }
    },
    resetAllPastes: (state, action) => {
      state.Pastes=[];
      localStorage.removeItem('pastes');
      toast.success("Reset successfully!!")
    },
    removeFromPastes: (state, action) => {
      const pasteId=action.payload;
      console.log(pasteId);
      const index=state.Pastes.findIndex((item)=>item._id===pasteId);
      if(index>=0){
        state.Pastes.splice(index,1);
        localStorage.removeItem("pastes",JSON.stringify(state.Pastes))
        toast.success("Paste Deleted!!");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = 
pasteSlice.actions

export default pasteSlice.reducer