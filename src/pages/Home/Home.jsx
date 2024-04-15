import "./Home.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = ({user}) => {
  
  return (
    <div id="home" className="home px-5 pt-5 d-flex gap-5 text-white">
      <div className="image w-25">
        <img src={user ? user["avatar_url"] : ""} alt={user ? user.name : ""} />
      </div>
      <div className="user-information w-75 fs-4">
      <p className="text-white nowrap"><span>User :</span> {user ? user.name : ""}</p>
      <div>
      <span>User Page :</span>
      <a href={user["html_url"]} target="_blank" rel="noopener noreferrer"><FaRegArrowAltCircleRight />
</a>
      </div>

      <p className="nowrap"><span>Public Repos :</span>{user["public_repos"]}</p>
      <p className="nowrap"><span>Followers :</span>{user.followers}</p>
      <p className="nowrap"><span>Following :</span>{user.following}</p>
     
      </div>
    </div>
  )
}

export default Home
