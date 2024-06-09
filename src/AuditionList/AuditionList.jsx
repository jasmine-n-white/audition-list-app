import React from 'react'
import Audition from '../Audition/Audition.jsx'
function AuditionList({auditions}) {
  const posts =[];
  for (let i=0; i<auditions.length; i++) {
    const audition = auditions[i];
    posts.push(<Audition key={i} audition={audition} />);
  }
  let extraText = "";
  if (auditions=="") {
    extraText= <p>No audition posts available to view yet. Create a new post!</p>
  }
  return (
    <div>{extraText}{posts}</div>
  )
}

export default AuditionList