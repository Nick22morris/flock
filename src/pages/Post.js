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
  // } //findArrayElementByTitle();

  function display() {
    return (
      <center>
        <article className="selected">
          <center>
            <h1>{myPostTitle}</h1>
          </center>
          <p>
            <div dangerouslySetInnerHTML={{ __html: myPostBody }} />
          </p>
        </article>
      </center>
    );
  }
  return display();
}

export default Post;
