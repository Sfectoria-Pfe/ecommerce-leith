import React, { useContext } from 'react'
import { IsOpenContext } from '../apps/App'

export default function Footer({isOpen}) {
 

  return (
    <div className='bg-warning' style={{position:'fixed',height:70,width:"100%",bottom:0,paddingLeft:isOpen ? 300 : 0}}>
      footer
    </div>
  )
}
