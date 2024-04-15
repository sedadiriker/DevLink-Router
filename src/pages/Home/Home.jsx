import "./Home.css"
const Home = ({user}) => {
  
  return (
    <div className="home">
      <div className="image">
        <img src={user ? user["avatar_url"] : ""} alt={user ? user.name : ""} />
      </div>
      <p>{user ? user.name : ""}</p>
    </div>
  )
}

export default Home
