import "./Home.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = ({user}) => {
  
  return (
    <div className="home px-5 pt-5 d-flex justify-content-center gap-5 ">
      <div className="image w-25">
        <img src={user ? user["avatar_url"] : ""} alt={user ? user.name : ""} />
      </div>
      <div className="user-information w-75 fs-4">
      <p className="text-white"><span>User :</span> {user ? user.name : ""}</p>
      <div>
      <span>User Page :</span>
      <a href={user["html_url"]} target="_blank" rel="noopener noreferrer"><FaRegArrowAltCircleRight />
</a>
      </div>
      </div>
    </div>
  )
}

export default Home
