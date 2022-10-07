import React from 'react'
import style from './Network.module.css';

export default function NetworkQuestions() {
  return (
    <>
    <div className={style.container} >
     <div className={style.hotText} >
     <p>Hot</p>
     <p>Network Questions</p>
     </div>

     <div className={style.questionsList} >
     <p>Were there women who were against giving women the right to vote?</p>
     <p>Why does everybody typedef over standard C types?</p>
     <p>An english word describing a pseudo-job</p>
     <p>When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?</p>
     <p>Does 1 px have a standard size</p>
     </div>

    </div>
    </>
  )
}
