import logo from './logo.svg';
import './styles/Home.css';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const submitSearch = (e) => {
    if (e.key === 'Enter') {
      window.location.href = '/results?search=' + search;
    }
  }


  return(
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gsztatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap" rel="stylesheet"></link>
      <div className='parent'>
        <img className='FrontLogo' src='/front-logo.png'/>
        <h1 className='title'>One Stop Shop</h1>
        <input type='search' onChange={handleSearch} onKeyDown={submitSearch} className='SearchBar'/>
      </div>
    </>
  );
}

export default Home;