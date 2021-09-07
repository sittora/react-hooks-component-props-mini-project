import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article.js";

console.log(blogData);
const posts = blogData.posts;

console.dir(posts)

function App({name}) {
  return (
    <div className="App">
      <Header {...name}/>
      <About />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
