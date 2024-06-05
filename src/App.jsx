import './App.css'
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Form from './Form/Form.jsx'
import AuditionList from './AuditionList/AuditionList.jsx'
function App() {
  const [posts, setPosts] = useState([]);
  const addAudition = (newPost) => {
    setPosts([...posts, newPost]);
  }
  return (
    <>
    <Header />
    <Hero />
    <div className="main">
      <Form />
      <AuditionList auditions={posts} />
    </div>
    </>
  )
}

export default App
