import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Kv from "../components/kv"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import BlogItem from "../components/blogItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdDate, order: ASC }) {
        edges {
          node {
            title
            slug
            createdDate(formatString: "YYYY/MM/DD")
            thumbnail {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Kv />
      <Container>
        <Row>
          {data.allContentfulBlogPost.edges.map((edge, index) => {
            return (
              <Col sm={4} key={index}>
                <BlogItem
                  title={edge.node.title}
                  date={edge.node.createdDate}
                  img={edge.node.thumbnail.gatsbyImageData}
                  link={`/blog/${edge.node.slug}`}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
