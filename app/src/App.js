import './App.css';
import './About.modules.css';
import Inputbox from './components/Inputbox.js'
import Post from './components/Post.js'
import GetData from './components/GetData.js'
import Navbar from './components/Navbar';
import Data from './pages/Data';
import Posts from './pages/Posts';
import Results from './pages/Results';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes, Link} from "react-router-dom";

function App() {
  
  return (
    <div classNameName="App"> 
      <header classNameName="App-header">
       {/* <Navbar/> */}
      </header>
      <div className='container'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Data" element={<Data />} />
          <Route path="Results" element={<Results />} />
          <Route path="Posts" element={<Posts />} />
          <Route path="About" element={<About />}/>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </div>
      {/* <body classNameName="App-body">
      <div className="card">
          <div className="card-body">
            <GetData></GetData>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Inputbox></Inputbox>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Post></Post>
          </div>
        </div>
        
      </body> */}
      {/* <footer classNameName="App-footer">
        FOOTER
      </footer> */}
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;