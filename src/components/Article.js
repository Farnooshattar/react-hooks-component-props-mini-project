import React from "react";
import Minutes from "./Minutes"
const Article = ({title, date = "January 1, 1970", preview, minutes}) => {
    
   
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{Minutes(minutes)}:{minutes} Minures to read</p>
        <p>{preview}</p>
      </article>
    );
}
export default Article;


