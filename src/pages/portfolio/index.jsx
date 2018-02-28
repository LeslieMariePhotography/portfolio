import React, { Component } from 'react'
import get from 'lodash/get'

import { siteMetadata } from '../../../gatsby-config'

import SiteNavi from '../../components/SiteNavi'
import PortfolioNavi from '../../components/PortfolioNavi'

class PortfolioIndex extends Component {
  render() {
    const { location } = this.props

    const projectLinks = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const projects = get(this, 'props.data.portfolio.projects')

    projects.forEach((data, i) => {
      const title = get(data, 'project.title.title')
      const image = get(data, 'project.coverImage.file.url')
      const path = get(data, 'project.id')
      const categories = get(data, 'project.categories')

      if (categories != null) {
        projectLinks.push(
          <div
            className={
              categories.indexOf(location.hash.replace('#', '')) > -1 ||
              location.hash === ''
                ? 'col-4 pt-5'
                : 'col-4 pt-5 d-none'
            }
            key={path + '-' + i}
          >
            <div
              className="text-center hovereffect"
              style={{ backgroundImage: `url(https:${image}` }}
            >
              <a href={`/portfolio/${path}`}>
                <div className="overlay">
                  <h2>{title}</h2>
                </div>
              </a>
            </div>
          </div>
        )
      } else {
        projectLinks.push(
          <div
            className={
              location.hash === '' ? 'col-4 pt-5' : 'col-4 pt-5 d-none'
            }
            key={path + '-' + i}
          >
            <div
              className="text-center hovereffect"
              style={{ backgroundImage: `url(https:${image}` }}
            >
              <a href={`/portfolio/${path}`}>
                <div className="overlay">
                  <h2>{title}</h2>
                </div>
              </a>
            </div>
          </div>
        )
      }
    })

    return (
      <div id="portfolio">
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <div className="container-fluid bg-even py-5">
          <div className="row justify-content-center">
            <div className="col-7">
              <p className="text-center display-4">My Portfolio</p>
            </div>
          </div>
          <PortfolioNavi
            projects={this.props.data.portfolio.projects}
            {...this.props}
          />
          <div id="portfolio-grid" className="row justify-content-center">
            <div className="col-lg-8 col-10">
              <div className="row justify-content-center">{projectLinks}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
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
