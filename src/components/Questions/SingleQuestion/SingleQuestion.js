import React from 'react'
import style from './singleQuestion.module.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function SingleQuestion({question}) {


  const handleOpen = () => {
    window.open(question.link, '_blank')
  }

  let timeNow = Date.now();
  timeNow = Math.round(timeNow/1000);

  // console.log(timeNow, question.creation_date )

  let elapsed = (timeNow - question.creation_date);
  elapsed = Math.round(elapsed/(1000*60*60));


  return (
    <> {

     question ? 

     <div className={style.container} >
          <div className={style.question} >
          <p onClick={()=>handleOpen()} >{question.title}</p>
          
          <div className={style.question_tags} >
          {question.tags.map((tag, index) => {
            return <div key={index} className={style.singleTag} >
                    <p>{tag}</p>
                   </div>
          })}

          </div>
          
          <p>posted {elapsed} min ago by <strong>{question.owner.display_name}</strong></p>
          </div>

          <div className={style.vote_answer_views} >
            
            <div className={style.rightSideSingle} >
                <p>{question.score}</p>
                <p>votes</p>
                <ThumbUpOffAltIcon fontSize='small' />
            </div>

            <div className={style.rightSideSingle} >
                <p>{question.answer_count}</p>
                <p>answer</p>
                <ChatBubbleOutlineIcon fontSize='small' />
            </div>

            <div className={style.rightSideSingle} >
                <p>{question.view_count}</p>
                <p>views</p>
                <RemoveRedEyeOutlinedIcon fontSize='small'/>
            </div>


          </div>
        </div>

     :

     <p>Loading</p>

    }

    </>
  )
}
