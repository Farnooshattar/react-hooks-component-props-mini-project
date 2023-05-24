import React from "react"
function About({image="https://via.placeholder.com/215",about,alt="blog logo"}){
    return (
        <aside>
            <img src={image} alt={alt}/>
            <p>{about}</p>
        </aside>
    )
}
export default About