import React from "react";
import axios from "axios";
function App() {
  const [story, setStory] = React.useState({
    title: "",
    body: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
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
      })
      .catch(() => {
        console.log("data sent failure");
      });
  }
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
    <div>
      <h1>Hello Black!!!</h1>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default App;
