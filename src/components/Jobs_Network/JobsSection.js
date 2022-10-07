import React, { useEffect, useState } from 'react'
import Jobs from './Jobs/Jobs';
import style from './JobsSection.module.css';
import NetworkQuestions from './Network_Questions/NetworkQuestions';
import Profile from './Profile/Profile';

export default function JobsSection() {
  

  return (
   <>
    <div className={style.container} >
     <Profile />
     <Jobs />
     <NetworkQuestions/>
    </div>
   </>
  )
}
