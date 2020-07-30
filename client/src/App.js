import "./App.css";
import React, { useEffect } from "react";
const axios = require("axios");

function App() {
  const [story, setStory] = React.useState({
    title: "",
    body: "",
  });
  const [posts, setPosts] = React.useState([]);
  //const[loading,setLoading]=React.useState(false);

  //...............  Function ...................
  function handleSubmit(event) {
    //   event.preventDefault();
    const payload = {
      title: story.title,
      body: story.body,
    };
    axios({
      url: "http://localhost:5000/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data sent success");
        setStory({ title: "", body: "" });
        //  setLoading(true);
      })
      .catch(() => {
        console.log("data sent failure");
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        //  setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;

    setStory((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <div className=".app">
      <h1>Hello Black!!!</h1>
      <form>
        <div className="from-input">
          <input
            //   autoComplete="off"
            placeholder="Title"
            type="text"
            name="title"
            value={story.title}
            onChange={handleChange}
          />
        </div>
        <div className="from-input">
          <textarea
            placeholder="Body..."
            cols="30"
            rows="10"
            name="body"
            value={story.body}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {posts.map((post) => {
          return (
            <div key={post.id} className="story">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
