import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Card } from "react-bootstrap"

const BlogItem = ({ title, date, img, link }) => {
  return (
    <Card className="mt-4">
      <GatsbyImage image={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Link to={`${link}`}>see more</Link>
      </Card.Body>
    </Card>
  )
}

export default BlogItem
