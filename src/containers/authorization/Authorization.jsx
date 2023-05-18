import React from 'react'
import './authorization.css'
import { useNavigate } from 'react-router-dom';

export default function Authorization() {
  const navigate = useNavigate();
  return (
    <div className='authorization-container' >
      <button onClick={() => navigate(-1)}>Close</button>
    </div>
  )
}
