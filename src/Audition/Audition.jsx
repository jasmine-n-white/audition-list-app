import React from 'react'
import './Audition.css'
import supabase from '../config/supabaseClient.jsx'
import {useAuthContext} from '../Context/auth.context'

function Audition({audition}) {
  const {posts, setPosts} = useAuthContext();
  const deleteAudition = async (id) => {
    const {error} =await supabase.from('auditions').delete().eq('id', id);
    if (error) {
      console.log("error");
    }
    setPosts(posts.filter((audition) => audition.id !== id ));
    
  }
  return (
    <div className="auditionPost">
      <h2>{audition?.position}</h2>
      <h2>{audition?.ensemble}</h2>
      <h2>{audition?.location}</h2>
      <h2>Deadline: {audition?.app_deadline}</h2>
      <h2>Date: {audition?.audition_date}</h2>
      <h2>{audition?.orchestra_website}</h2>
      <button>Edit</button>
      <button onClick={() => deleteAudition(audition.id)}>Delete</button>
    </div>
  )
}

export default Audition