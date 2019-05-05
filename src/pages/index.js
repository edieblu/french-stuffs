import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Vocabulary from "../components/vocabulary"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const totals = data.allMarkdownRemark.edges.reduce(
      (prev, curr) => {
        if (curr.node.frontmatter.memrise) {
          return {
            node: {
              frontmatter: {
                memrise: {
                  events:
                    prev.node.frontmatter.memrise.events +
                    curr.node.frontmatter.memrise.events,
                  minutes:
                    prev.node.frontmatter.memrise.minutes +
                    curr.node.frontmatter.memrise.minutes,
                  streak:
                    prev.node.frontmatter.memrise.streak +
                    curr.node.frontmatter.memrise.streak,
                },
                Anki: {
                  events:
                    prev.node.frontmatter.Anki.events +
                    curr.node.frontmatter.Anki.events,
                  minutes:
                    prev.node.frontmatter.Anki.minutes +
                    curr.node.frontmatter.Anki.minutes,
                  streak:
                    prev.node.frontmatter.Anki.streak +
                    curr.node.frontmatter.Anki.streak,
                },
                ClozeMaster: {
                  events:
                    prev.node.frontmatter.ClozeMaster.events +
                    curr.node.frontmatter.ClozeMaster.events,
                  streak:
                    prev.node.frontmatter.ClozeMaster.streak +
                    curr.node.frontmatter.ClozeMaster.streak,
                },
              },
            },
          }
        } else {
          return prev
        }
      },
      {
        node: {
          frontmatter: {
            memrise: {
              deck: "",
              events: 0,
              minutes: 0,
              streak: 0,
            },
            Anki: {
              deck: "",
              events: 0,
              minutes: 0,
              streak: 0,
            },
            ClozeMaster: {
              deck: "",
              events: 0,
              streak: 0,
            },
          },
        },
      }
    )
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <Vocabulary {...totals.node.frontmatter} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <div
                key={node.fields.slug}
                className={node.frontmatter.description}
                style={{
                  border: "2px solid rgba(211,211,211, 0.2)",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0.0625rem 0.25rem 0.0625rem rgba(166, 140, 242, 0.05)",
                  margin: "10px 0",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.8rem",
                  }}
                >
                  {title}
                </h3>
                <small>{node.frontmatter.date}</small>
                {/* <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              /> */}
              </div>
            </Link>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            memrise {
              deck
              events
              minutes
              streak
            }
            Anki {
              deck
              events
              minutes
              streak
            }
            ClozeMaster {
              deck
              events
              streak
            }
          }
        }
      }
    }
  }
`
