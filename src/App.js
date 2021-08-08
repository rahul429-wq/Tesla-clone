import React from 'react'
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Wrap from './Wrap';
import a1 from './carInfo.json';
import Header from './Component/Header';

function App() {
  return (
  <>
      <Header/>
      {a1.map(a=>(
        <div key={a.id}>
        <Wrap  imgs={a.image} title={a.title} btntextl="custome order" btntextr="existing inventory" para={a.description}/>
        </div>
      ))}
  </>
  )
}

export default App;
