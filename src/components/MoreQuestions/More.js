import React from 'react'
import style from './More.module.css';
import stackVector from './stackoverflowSS-removebg-preview.png';

export default function More() {
  return (
    <>
        <div className={style.container} >
        <img src={stackVector}  alt='stackoverflow'/>
        <div className={style.info} >
        <p>Looking for more?</p>
        <p>Browse the complete list of Questions or Popular tags. Help us answer unanswered Questions</p>
        </div>
        </div>
    </>
  )
}
