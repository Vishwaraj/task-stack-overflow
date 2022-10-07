import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import SearchBar from './Searchbar/SearchBar'
import './questions.css'
import { Button } from '@mui/material'
import SingleQuestion from './SingleQuestion/SingleQuestion'
import More from '../MoreQuestions/More'

export default function Questions() {

  //state for questions object
  const [questions, setQuestions] = useState(null);

  //state for search term
  const [search, setSearched] = useState(null);


  const buttonStyle ={
    color: 'gray',
  }

  const API = 'https://api.stackexchange.com/2.3/questions?pagesize=7&order=desc&sort=activity&site=stackoverflow'





  const searchQuestions = async (term) => {

    const searchAPI = `https://api.stackexchange.com/2.3/search?pagesize=7&order=desc&sort=activity&intitle=${term}&site=stackoverflow`

    try {
      const result = await fetch(searchAPI);
      const data = await result.json();
      console.log('search data', data);
      if(data.items){
        setQuestions(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // console.log('search term', search)



  const getQuestions = async () => {
    try {
      const result = await fetch(API);
      const data = await result.json();
      if(data.items) {
        setQuestions(data.items);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const check = useRef();

  useEffect(() => {
    if(!check.current) {
      getQuestions();
      check.current = true
    }
  }, [])

  // useLayoutEffect(() => {
  //   if(!check.current) {
  //     getQuestions();
  //     check.current = true
  //   }
  // })



  return (
    <>
     <div className='questions-body' >
      <SearchBar search={search} searchQuestions={searchQuestions} setSearched={setSearched} />
      <div className='questions-container' >
      <p>Questions</p>
      <div className='questions-buttons' >
       <Button style={buttonStyle} >Interesting</Button>
       <Button style={buttonStyle} >Featured</Button>
       <Button style={buttonStyle} >Hot</Button>
       <Button style={buttonStyle} >Week</Button>
       <Button style={buttonStyle} >Month</Button>
      </div>

      <div className='questions-list' >
      {questions ? questions.map((question, index) => {
        return <SingleQuestion key={index} question={question} />
      })
      : <p>Loading...</p>
        }

      </div>

      </div>
      <More /> 
     </div> 
    </>
  )
}
