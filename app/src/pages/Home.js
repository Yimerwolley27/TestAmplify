import GetData from "../components/GetData";
import Inputbox from "../components/Inputbox";
import Post from "../components/Post";

export default function Home() {
    return (
        <div>
       <body classNameName="App-body">
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
        
      </body> 
      </div>
    )
}