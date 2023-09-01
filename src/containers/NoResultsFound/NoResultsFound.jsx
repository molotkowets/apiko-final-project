import React from 'react'
import './no-results-found.css'
export default function NoResultsFound() {
  return (
    <div className='wrapper-error-found'>
        <h2>No Results Found</h2>
        <p>
            We did not find any article that matches this search
            Make sure that the search text is entered correctly
            Try using other search criteria
        </p>
    </div>
  )
}
