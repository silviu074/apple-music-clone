import React from 'react'
import '../styles/MainFeed.css'
import { InProgress } from '../components/InProgress'

export const Radio = () => {
  return (
    <div className='mainFeedContainer' >
      <div className='mainFeed' >
      <h1>Radio</h1>
      <hr className='solid'/>
      <InProgress/>
      </div>
    </div>
  )
}
