import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import All from './components/All';
import Korean from './components/Korean';
import Chinese from './components/Chinese';
import Japanese from './components/Japanese';
import West from './components/West';
import Coffee from './components/Coffee';
import MyPage from './components/MyPage';


function App() {
  return (
  <div className='text-center'>
    <div className='text-xl py-5 bg-blue-500'>
      <div className='inline-block align-middle'>
        <img src='assets/main_logo.png' alt="logo" className=' h-10 w-10 ' />
      </div>
      오늘은 외대에서 뭘 먹어야 소문이 날까
    </div>
    <Routes>
      <Route path='/'element={<All />} />
      <Route path='/korean'element={<Korean />} />
      <Route path='/chinese'element={<Chinese />} />
      <Route path='/japanese'element={<Japanese />} />
      <Route path='/west'element={<West />} />
      <Route path='/coffee'element={<Coffee />} />
      <Route path='/mypage'element={<MyPage />} />
    </Routes>
  </div>)
}

export default App;
