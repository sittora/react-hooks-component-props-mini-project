import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map (post => ( 
                <Article key={post.id} preview={post.preview} title={post.title} date={post.date} minutes={post.minutes}/>
            ))}
        </main>
    );
}



export default ArticleList;