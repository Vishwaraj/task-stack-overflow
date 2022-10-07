import { Button } from '@mui/material';
import React from 'react'
import style from './SingleJob.module.css';


export default function SingleJob({job}) {



       

  return (
    <>
        <div className={style.container} >

        <div className={style.jobTitle} >
        <p>{job.jobTitle}</p>
        <p>{job.company}</p>
        </div>

        <div className={style.location} >
        <p>{job.location}</p>
        <p>{job.nature}</p>
        </div>
      
        <div className={style.skills} >

        {
            job.skills.map((skill, index) => {
                return <div key={index} className={style.singleSkill} >
                       <p>{skill}</p>
                       </div>
            })
        }
         

        </div>
        
        </div>
    </>
  )
}
