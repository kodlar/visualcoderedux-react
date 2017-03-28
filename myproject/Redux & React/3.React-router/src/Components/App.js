import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
       
        {' '}
        <Link to="/ex02/ogan">Examples02</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/ex02')}>Go to /Examples02</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}