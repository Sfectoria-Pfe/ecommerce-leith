import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";

export default function Sidebar({setIsOpen}) {
  
  return (
    <div className=' text-white bg-teal' style={{zIndex:5,position:'fixed',height:'100%', width:300}}>
    
      <div className='d-flex justify-content-between'>
        <div>Logo</div>
        <div><button className='btn btn-light' onClick={()=>setIsOpen(false)}><IoMdClose /></button></div>
      </div>
      <p>dashboard</p>
      <p>product</p>
      <p>orders</p>
    </div>
  )
}
