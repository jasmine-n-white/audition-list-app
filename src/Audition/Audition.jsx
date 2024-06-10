import React from 'react'
import './Audition.css'
import supabase from '../config/supabaseClient.jsx'
import {useAuthContext} from '../Context/auth.context'
import {Link} from 'react-router-dom'

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
      <p>{audition?.ensemble}</p>
      <p>{audition?.location}</p>
      <p>Deadline: {audition?.app_deadline}</p>
      <p>Date: {audition?.audition_date}</p>
      <p>{audition?.orchestra_website}</p>
      <Link to={"/update"}><button>Edit</button></Link>
      <button onClick={() => deleteAudition(audition.id)}>Delete</button>
    </div>
  )
}

export default Audition