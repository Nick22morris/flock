import React from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Post({ title }) {
  // const [postLists, setPostList] = useState([]);
  // const postsCollectionRef = collection(db, "posts");

  // function findArrayElementByTitle(array, title) {
  //   return array.find((element) => {
  //     return element.title === title;
  //   });
  // }
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // });
  // const post = findArrayElementByTitle(postLists, "Welcome");

  // function display() {
  //   if (post) {
  //     return (
  //       <div className="post">
  //         <div className="postHeader">
  //           <div className="title">
  //             <h1> {post.title}</h1>
  //           </div>
  //         </div>
  //         <div className="postTextContainer"> {post.postText} </div>
  //       </div>
  //     );
  //   }
  //   console.log(post);
  //   return (
  //     <div className="post">
  //       <div className="postHeader">
  //         <div className="title">
  //           <h1> Failed to render</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return <h1>Hello</h1>;
}

export default Post;
