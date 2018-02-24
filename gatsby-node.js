const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulLessonCopy(filter: { node_locale: { eq: "en-US" } }) {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allContentfulLessonCopy.edges, edge => {
          createPage({
            path: `/blog/${edge.node.id}`,
            component: slash(blogPost),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
  })
}
