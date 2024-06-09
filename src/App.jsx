import './App.css'
import {useEffect} from 'react';
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Form from './Form/Form.jsx'
import AuditionList from './AuditionList/AuditionList.jsx'
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
    <Hero />
    <div className="main">
      <Form />
      <AuditionList auditions={posts}/>
    </div>
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
