import React from 'react'
import style from './Profile.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Profile() {
  return (
    <>
        <div className={style.container} >
            <p>Help</p>
            <p>Tour</p>
            <AccountCircleIcon fontSize='large' />
        </div>

    </>
  )
}
