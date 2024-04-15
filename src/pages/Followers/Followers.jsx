import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
import "./Followers.css";
import Swal from "sweetalert2";

const Followers = ({ user }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const totalItems = followers.length;
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const lastFollower = currentPage * itemsPerPage; // 1 * 10(10)

  const firstFollower = lastFollower - itemsPerPage; // 10 - 10 (0)

  const currentFollowers = followers.slice(firstFollower, lastFollower);

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getFollowers = async () => {
      const URL = `https://api.github.com/users/${user.login}/followers`;

      try {
        const res = await axios(URL);
        const { data } = res;
        setFollowers(data);

        if (data.length === 0) {
          Swal.fire({
            icon: "info",
            title: "No Followers Found",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFollowers();
  }, [user.login]);
  // console.log(followers);
  return (
    <div className="followers d-flex flex-wrap gap-4 align-items-center justify-content-center py-5 text-center bg-black">
      {/* <form className="w-50 d-flex gap-2">
        <input
          className="w-100 mx-auto"
          type="search"
          name="search"
          id="search"
          
        />
        <button className="btn btn-danger">Search</button>
      </form> */}
      {loading ? (
        <>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      ) : (
        <div className=" d-flex flex-wrap  justify-content-center gap-5">
          {currentFollowers.map((follower) => (
            <Card key={follower.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={follower["avatar_url"]} />
              <Card.Body>
                <Card.Title>{follower.login}</Card.Title>
                <Button variant="primary">
                  <a
                    className="text-white text-decoration-none"
                    href={follower["html_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </Button>
              </Card.Body>
            </Card>
          ))}
          <Pagination className="w-75 d-flex justify-content-center mt-5">
            {/* //! Her sayfaya tıklandığında active durumu veriliyor */}
            {[...Array(totalPages).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => handlePaginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Followers;
