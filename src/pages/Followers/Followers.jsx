import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Followers = ({ user }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getFollowers = async () => {
      const URL = `https://api.github.com/users/${user.login}/followers`;

      try {
        const res = await axios(URL);
        const { data } = res;
        setFollowers(data)
      } catch (err) {
        console.log(err);
      }
    };
    getFollowers();
  }, [user.login]);
  console.log(followers);
  return (
    <div className="followers d-flex flex-wrap gap-4 justify-content-center py-5 text-center">
      {followers.map((follower) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={follower["avatar_url"]} />
          <Card.Body>
            <Card.Title>{follower.login}</Card.Title>
            <Button variant="primary"><a className="text-white text-decoration-none" href={follower["html_url"]} target="_blank" rel="noopener noreferrer">View Profile</a></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Followers;
