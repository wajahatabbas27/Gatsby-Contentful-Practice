import { graphql } from 'gatsby'
import React from 'react'
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const index = ({ data }) => {

  console.log("data", data);

  return (
    <div>
      <h1>Index Page BRo AZ</h1>
      <div><h1>{data.allContentfulBlogPost.edges[0].node.title}</h1></div>
      <div><h1>{data.allContentfulBlogPost.edges[0].node.publishDate}</h1></div>
      <div><h1>{data.allContentfulBlogPost.edges[1].node.title}</h1></div>
      <div><h1>{data.allContentfulBlogPost.edges[1].node.publishDate}</h1></div>
      { //Rich text ke liye hai yh 
      /**  <div>{documentToReactComponents(data.allContentfulBlogPost.edges[0].node.body.raw)}</div>
      <br />
      <div>{documentToReactComponents(data.allContentfulBlogPost.edges[1].node.body.raw)}</div>
  */}
    </div>
  )
}

export default index


export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          publishDate
          body {
            raw
          }
        }
      }
    }
   }
`;