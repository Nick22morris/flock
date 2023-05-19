import React from "react";
function Post(props) {
  const myPostTitle = localStorage.getItem("clickedTitle");
  const myPostBody = localStorage.getItem("clickedBody");
  console.log("post:" + myPostTitle);
  console.log("post:" + myPostBody);

  // function findArrayElementByTitle() {
  //   return allPosts.find((element) => {
  //     return element.title === "Welcome";
  //   });
  // }
  const post = "Hello"; //findArrayElementByTitle();

  function display() {
    if (post) {
      return (
        <center>
          <article className="selected">
            <center>
              <h1>{myPostTitle}</h1>
            </center>
            <p>{myPostBody}</p>
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
