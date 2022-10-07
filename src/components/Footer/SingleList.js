import React from 'react'
import style from './SingleList.module.css';


export default function SingleList({list}) {
  return (
    <>
     <div className={style.container} >
     <p className={style.title} >{list.title}</p>
     <div className={style.list} >
     {list.array.map((item, index) => {
        return <p key={index} className={style.singleLink} >{item}</p>
     })}
     </div>
   
     </div>
    </> 
  )
}
