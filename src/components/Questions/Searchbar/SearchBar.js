import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import './searchbar.css'
import { width } from '@mui/system';

export default function SearchBar({setSearched, searchQuestions, search}) {

  const searchBarStyle = {
      paddingBottom: '1rem',
      width: '30vw'
  }

  return (
    <>
        <div className='search-container' >
          <div className='search-body' >
          
          <TextField onChange={(e)=>setSearched(e.target.value)} variant='standard' style={searchBarStyle} label='Search'/>
          <IconButton  onClick={() => {searchQuestions(search)}}>
          <SearchIcon />
          </IconButton>
          </div>
        </div>
    </>
  )
}
