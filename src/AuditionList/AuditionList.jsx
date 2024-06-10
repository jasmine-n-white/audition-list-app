import React from 'react'
import Audition from '../Audition/Audition.jsx'
import './AuditionList.css'

function AuditionList({auditions}) {
  const posts =[];
  for (let i=0; i<auditions.length; i++) {
    const audition = auditions[i];
    posts.push(<Audition key={i} audition={audition} />);
  }
  let extraText = "";
  if (posts=="") {
    extraText= <p>No audition posts available to view yet. Create a new post!</p>
  }
  return (
    <div className="auditionList">{extraText}{posts}</div>
  )
}

export default AuditionList