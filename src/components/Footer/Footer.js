import React from 'react'
import style from './Footer.module.css';
import SingleList from './SingleList';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {

  const data = [
    {
        title: 'TECHNOLOGY',
        array: [
            'Stack Overflow', 'Server Fault', 'Super User', 'Web Applications', 'Ask Ubuntu', 'Webmasters', 'Game Development', 'TeX - LateX'
        ]
    },
    {
        title: 'LIFE/ARTS',
        array: [
            'Photography', 'Science Fiction & Fantasy', 'Graphic Design', 'Movies & TV', 'Seasoned Advice (Cooking)', 'Home Improvement', 'Personal Finance & Money'
        ]
    },
    {
        title: 'CULTURE & RECREATION',
        array: [
            'English Language & Usage', 'Skeptics', 'Mi Yodeya (Judaism)', 'Travel', 'Christianity', 'Arcade', 'Bicycles'
        ]
    },
    {
        title: 'SCIENCE',
        array: [
            'Mathematics', 'Cross Validated (stats)', 'Theoretical Computer Science', 'Physics', 'MathOverflow', 'Chemistry', 'Biology'
        ]
    },
    {
        title: 'OTHER',
        array: [
            'Stack Apps', 'Meta Stack Exchange', 'Area 51', 'Stack overflow careers'
        ]
    }

  ]

  const iconStyle = {
    color: 'gray'
  }


  const aboutUs = ['about us', 'tour', 'help', 'blog', 'data', 'legal', 'privacy policy', 'work here', 'advertising info', 'mobile', 'contact us', 'feedback']


  return (
    <>
        <div className={style.container} >

            <div className={style.horizontal} >
            <div className={style.about} >
            {aboutUs.map((about, index) => {
                return <p key={index} >{about}</p>
            })}
            </div>

            <div className={style.icons} >
             <TwitterIcon  style={iconStyle} />
             <FacebookIcon style={iconStyle}  />
            </div>

            </div>

            <div className={style.vertical} >
             {data.map((list, index) => {
                return <SingleList key={index}  list={list} />
             })}
            </div>

        </div>
    </>
  )
}
