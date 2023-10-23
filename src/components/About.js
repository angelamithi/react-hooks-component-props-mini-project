import React from "react";

function About({image,altAttribute,about}){
    return(<aside>
        <img src={image} alt={altAttribute}></img>
        <p>{about}</p>
    </aside>)
}
export default About;