import Post from "../components/Post";

export default function Posts() {
    return (
      <div className="d-flex justify-content-center pt-5">
        <div className="card" style={{width: "700px"}}>
            <div className="card-body">
              <Post></Post>
            </div>
        </div>
      </div>
    )
}