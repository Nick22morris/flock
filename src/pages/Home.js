import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function Home({ isAuth }) {
  const [latestPost, setLatestPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");
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
  function goToPost(title, body) {
    localStorage.setItem("clickedTitle", title);
    localStorage.setItem("clickedBody", body);
    navigate("/post");
  }
  return (
    <div className="homePage">
      <article className="featured">
        <h2>Latest - {latestPost ? latestPost.title : "Loading..."}</h2>
        <div dangerouslySetInnerHTML={{ __html: latestPost ? latestPost.postText.substring(0, 400) + "..." : "Loading" }} />
        <button className="button" onClick={() => goToPost(latestPost.title, latestPost.postText)}>
          Read More
        </button>
      </article>

      {allPosts.slice(1).map((post) => {
        return (
          <article>
            <h2>{post.title ? post.title : "Loading..."}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.postText ? post.postText.substring(0, 400) + "..." : "Loading" }} />
            <button className="button" onClick={() => goToPost(post.title, post.postText)}>
              Read More
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default Home;
