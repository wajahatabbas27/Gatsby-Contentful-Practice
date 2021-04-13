import React from "react";
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const blogpost = ({ pageContext }) => {
    console.log("Page Context: " + JSON.stringify(pageContext));
    return (
        <div>
            <div>{pageContext.title}</div>
            <div>{pageContext.slug}</div>
        </div>
    )
}

export default blogpost
