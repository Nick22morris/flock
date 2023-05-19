import React, { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Home({ isAuth }) {
  const [latestPost, setLatestPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  var postsCollectionRef = collection(db, "posts");
  const q = query(postsCollectionRef, orderBy("timeStamp"));
  postsCollectionRef = q;
  let navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      console.log("attempt");
      const data = await getDocs(postsCollectionRef);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setLatestPost(posts[0]);
      setAllPosts(posts);
      console.log("Run!");
    };

    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function goToPost(title, body) {
    localStorage.setItem("clickedTitle", title);
    localStorage.setItem("clickedBody", body);
    navigate("/post");
  }

  return (
    <div className="homePage">
      <article className="featured">
        <h2>Latest - {latestPost ? latestPost.title : "Loading..."}</h2>
        <p>
          <div dangerouslySetInnerHTML={{ __html: latestPost ? latestPost.postText.substring(0, 400) + "..." : "Loading" }} />
        </p>
        <button className="button" onClick={() => goToPost(latestPost.title, latestPost.postText)}>
          Read More
        </button>
      </article>

      {currentPosts.slice(1).map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title ? post.title : "Loading..."}</h2>
            <p>
              <div dangerouslySetInnerHTML={{ __html: post.postText ? post.postText.substring(0, 400) + "..." : "Loading" }} />
            </p>
            <button className="button" onClick={() => goToPost(post.title, post.postText)}>
              Read More
            </button>
          </article>
        );
      })}

      <div className="pagination">
        {Array.from({ length: Math.ceil(allPosts.length / postsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
