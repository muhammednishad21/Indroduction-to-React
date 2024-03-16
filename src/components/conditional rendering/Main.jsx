import React from 'react'
import Logged from './Logged'
import Notlogged from './Notlogged'

const Main = ({isloggedin}) => {
  return (
    <div>
        {isloggedin? <Logged/> : <Notlogged/>}
    </div>
  )
}

export default Main