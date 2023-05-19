import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home({ isAuth }) {
  const [latestPost, setLatestPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [clickedPost, setClickedPost] = useState(localStorage.getItem("clicked"));
  let navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setLatestPost(posts[0]);
      setAllPosts(posts);
    };

    getPosts();
  }, []);
  function goToPost(title) {
    setClickedPost(title);
    console.log("Run");
    // navigate("/post");
  }
  return (
    <div className="homePage">
      <article className="featured">
        <h2>Latest - {latestPost ? latestPost.title : "Loading..."}</h2>
        <p>{latestPost ? latestPost.postText.substring(0, 400) : "Loading"}...</p>
        <button className="button" onClick={() => this.goToPost(latestPost.title)}>
          Read More
        </button>
      </article>

      {allPosts.slice(1).map((post) => {
        return (
          <article>
            <h2>{post.title ? post.title : "Loading..."}</h2>
            <p>{post.postText ? post.postText.substring(0, 400) : "Loading"}...</p>
            <button className="button">Read More</button>
          </article>
        );
      })}
    </div>
  );
}

export default Home;
