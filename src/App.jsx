import './App.css'
import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Form from './Form/Form.jsx'
import AuditionList from './AuditionList/AuditionList.jsx'
import Update from './Update/Update.jsx'
import AuthStorage from './Context/auth.context'
import {useAuthContext} from './Context/auth.context'
import supabase from './config/supabaseClient.jsx'

function App() {
  const {posts, setPosts} = useAuthContext();
  useEffect (() => {
    fetchAuditions();
  }, [])
const fetchAuditions = async () => {
  const {data, error} = await supabase.from('auditions').select();
  if (error) {
    console.log(error);
  }
  setPosts(data);
}
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/create" element={<Form/>}/>
      <Route path="/:auditionid" element={<Update/>}/>
      <Route path="/AuditionList" element={<AuditionList auditions={posts}/>}/>
    </Routes>
    
    </>
  )
}

function AppWrap() {
  return (
    <AuthStorage>
      <App />
    </AuthStorage>

  )
}

export default AppWrap;
