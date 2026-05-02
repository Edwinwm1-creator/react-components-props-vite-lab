import React from "react";
import blogData from "../data/blog"; // Double check your folder path!
import Header from "./Header";
import About from "./About";
import ArticleList from "./Article List";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
