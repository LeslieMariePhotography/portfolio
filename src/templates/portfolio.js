import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import striptags from 'striptags'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'
import PortfolioNavi from '../components/PortfolioNavi'

class PortfolioTemplate extends Component {
  render() {
    const list = []
    const post = get(this, 'props.data.post')
    const site = get(this, 'props.data.site')
    const title = get(post, 'title.title')
    const siteTitle = get(site, 'meta.title')
    const images = get(post, 'images')

    console.log(images)

    images.forEach((image, imgCount) => {
      const imgLink = get(image, 'file.url')

      list.push(
        <div className="col-3 pt-5">
          <img src={`https:${imgLink}`} className="img-fluid mx-auto d-block" />
        </div>
      )
    })

    return (
      <div>
        <Helmet title={`${title} | ${siteTitle}`} />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <div id="portfolio" className="container-fluid bg-even py-5">
          <div id="portfolio-title" className="row justify-content-center">
            <div className="col-7">
              <p className="text-center display-4">{title}</p>
            </div>
          </div>
          <PortfolioNavi
            projects={this.props.data.portfolio.projects}
            {...this.props}
          />
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row justify-content-center">{list}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query PortfolioPostByPath($id: String!) {
    site {
      meta: siteMetadata {
        title
      }
    }
    post: contentfulPhotoGallery(id: { eq: $id }) {
      title {
        title
      }
      images {
        file {
          url
        }
      }
    }
    portfolio: allContentfulPhotoGallery {
      totalCount
      projects: edges {
        project: node {
          id
          categories
          tags
          title {
            title
          }
          coverImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
