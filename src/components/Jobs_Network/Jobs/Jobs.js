import { Button } from '@mui/material';
import React from 'react'
import style from './Jobs.module.css';
import SingleJob from './SingleJob';

export default function Jobs() {


  const jobsArr = [
    {
        jobTitle: 'Frontend Developer with Angular',
        company: 'WalletHub',
        location: 'Washington, DC',
        nature: 'Remote',
        skills: ['Angular', 'cordova']
    },
    {
        jobTitle: 'Senior iOS / iPhone Engineer',
        company: 'Perk.com INC',
        location: 'Bengaluru, India',
        nature: 'In Office',
        skills: ['iOS', 'iPhone']
    },
    {
        jobTitle: 'Software Engineer',
        company: 'SparkNET Technologies',
        location: 'No Location',
        nature: 'Remote',
        skills: ['iOS', 'Ruby on Rails']
    }
]

const buttonStyle = {
  marginLeft: '1.2rem',
  marginTop: '0.5rem',
  color: 'lightseagreen'
}
  
  return (
    <>

        <div className={style.container} >

        <div className={style.jobsText} >
        <p>Jobs</p>
        <p>Looking out for...</p>
        </div>


        <div className={style.jobsList} >
        {jobsArr.map((job, index) => {
          return <SingleJob key={index} job={job} />
        })}
        </div>
        <Button style={buttonStyle} variant='standard' >view all jobs</Button>
        </div>
 
    </>
  )
}
