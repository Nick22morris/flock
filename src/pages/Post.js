import React from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function Post() {
  const [latestPost, setLatestPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setLatestPost(posts[0]);
      setAllPosts(posts);
    };

    getPosts();
  }, []);

  function findArrayElementByTitle() {
    return allPosts.find((element) => {
      return element.title === "Welcome";
    });
  }
  const post = findArrayElementByTitle();

  function display() {
    if (post) {
      return (
        <center>
          <article>
            <center>
              <h1>{post.title}</h1>
            </center>
            <p>{post.postText}</p>
          </article>
        </center>
      );
    }
    console.log(post);
    return (
      <center>
        <article>
          <center>
            <h1>Loading...</h1>
          </center>
          <p>Loading...</p>
        </article>
      </center>
    );
  }
  return display();
}

export default Post;
