import { Button } from '@mui/material'
import React from 'react'
import './sidebar.css'

export default function SideBar() {

    const buttonsArr = ['Questions', 'Jobs', 'Documentation', 'Tags', 'Users', 'Badges', 'Ask Question', 'Stack Exchange', 'Inbox'];

    const buttonStyle = {
        color: 'gray'
    }


  return (
    <>
        <div className='container' >
            <img src='https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png'  alt='stack-overflow' />
            <div className='buttons' >
            {buttonsArr.map((button, index) => {
                return <Button key={index} style={buttonStyle} >{button}</Button>
            })}
               
            </div>
        </div>
    </>
  )
}
