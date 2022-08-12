import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, navigate } from "gatsby"
import React from "react"
import { Button, Container } from "react-bootstrap"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdDate(formatString: "YYYY/MM/DD")
      body {
        raw
        references {
          gatsbyImageData
        }
      }
    }
  }
`
const BlogDetail = props => {
  const body = JSON.parse(props.data.contentfulBlogPost.body.raw)
  const mainImage = contentfulBlogPost => {
    return (
      <img
        width="100%"
        src={
          contentfulBlogPost.body.references[0].gatsbyImageData.images.fallback
            .src
        }
        alt={contentfulBlogPost.title}
      />
    )
  }
  return (
    <Layout>
      <Container style={{ maxWidth: 640 }} className="pt-4">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.createdDate}</p>
        {mainImage(props.data.contentfulBlogPost)}
        {documentToReactComponents(body)}
      </Container>
      <Container className="text-center">
        <Button onClick={() => navigate("/")} variant="outline-info">
          一覧へ戻る
        </Button>
      </Container>
    </Layout>
  )
}

export default BlogDetail
