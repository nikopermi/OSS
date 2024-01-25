import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <>
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //         hahahahasd
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   </>
  // );

  return(
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap" rel="stylesheet"></link>
    <div className='parent'>
          <h1 className='title'>One Stop Shop</h1>
          <textarea className='SearchBar'></textarea>
    </div>
    </>

  );

}

export default App;
