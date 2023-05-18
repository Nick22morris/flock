import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Home({ isAuth }) {
  const [latestPost, setLatestPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setLatestPost(posts[0]);
      setAllPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <div className="homePage">
      <center>
        <article className="featured">
          <h2>Latest - {latestPost ? latestPost.title : "Loading..."}</h2>
          <p>{latestPost ? latestPost.postText.substring(0, 400) : "Loading"}...</p>
          <Link to="/">Read More</Link>
        </article>

        {allPosts.slice(1).map((post) => {
          return (
            <article>
              <h2>{post.title ? post.title : "Loading..."}</h2>
              <p>{post.postText ? post.postText.substring(0, 400) : "Loading"}...</p>
              <Link to="/">Read More</Link>
            </article>
          );
        })}
      </center>
    </div>
  );
}

export default Home;
