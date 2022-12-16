import './App.css';
import Inputbox from './components/Inputbox.js'
import Post from './components/Post.js'


function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img classNameName="logo" src ="https://www.costargroup.com/images/librariesprovider3/costar-group/costar_group-logo.png?sfvrsn=2"/>
            </a>
          </div>
        </nav>
      </header>
      <body classNameName="App-body">
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
        
      </body>
      {/* <footer classNameName="App-footer">
        FOOTER
      </footer> */}
    </div>
  );
}

export default App;