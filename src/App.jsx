import "./index.css";
import "./App.css";
import Addpost from "./components/Addpost";
import Showpost from "./components/Showpost";
import { useState } from "react";

function App() {
  const [post, setNewPost] = useState([
    {
      username: "username",
      userid: "userid",
      email: "email",
      desc: "desc.current.value",
      likes: "likes.current.value",
      comments: "comments.current.value",
      time: "time.current.value",
    },
  ]);

  function handelAddPost(newPost) {
    let newPostArray = [...post, newPost];
    setNewPost(newPostArray);
  }

  return (
    <>
      <div className="flex justify-center space-x-10">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Show Posts
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Posts
        </button>
      </div>
      <Addpost handelAddPost={handelAddPost}></Addpost>
      <Showpost posts={post}></Showpost>
    </>
  );
}

export default App;
