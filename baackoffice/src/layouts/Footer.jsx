import React from 'react'

export default function Footer({siedebar}) {
  return (
    <div className='bg-warning' style={{position:'fixed',height:70,width:"100%",bottom:0,paddingLeft:siedebar? 250 : 0}}>
      footer
    </div>
  )
}
