import React from "react";


function Article ({title, preview, date =  "January 1, 1970", minutes}) {
    const emoji = "☕️";
    const bentoEmoji = "🍱";
    let toDisplay ="";
    // if it's less than 30 minutes we display coffe, if it's more than 30 mintutes we display bento
    if (minutes < 30) {
        const numberOfEmojis = Math.ceil(minutes / 5);
        for(let i=0; i < numberOfEmojis; i++){
            toDisplay += emoji;
        }
    } else {
    const numberOfEmojis = Math.ceil(minutes / 10);
    for(let i=0; i < numberOfEmojis; i++){
        toDisplay += bentoEmoji;
    }
    }




   

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} : {toDisplay}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;