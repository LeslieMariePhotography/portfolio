import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faLocation from '@fortawesome/fontawesome-free-solid/faLocationArrow'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'

class Home extends Component {
  render() {
    const projectLinks = []
    const tagLinks = []
    const tagList = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const projects = get(this, 'props.data.portfolio.projects')

    projects.forEach((data, i) => {
      const title = get(data, 'project.title.title')
      const image = get(data, 'project.coverImage.file.url')
      const path = get(data, 'project.id')
      const tags = get(data, 'project.tags')

      tags.forEach((tag, tagCount) => {
        if (tagList.indexOf(tag) == -1) {
          tagList.push(tag)
          tagLinks.push(
            <li className="nav-item" key={tagCount}>
              <Link to="#">{tag}</Link>
            </li>
          )
        }
      })

      projectLinks.push(
        <div className="col-4 pt-5" key={i}>
          <div
            className="text-center hovereffect"
            style={{ backgroundImage: `url(https:${image})` }}
            key={i}
          >
            <a href={`/portfolio/${path}`}>
              <div className="overlay">
                <h2>{title}</h2>
              </div>
            </a>
          </div>
        </div>
      )
    })

    return (
      <div>
        <Helmet title={siteMetadata.title} />
        <div id="home-header" className="container-fluid">
          <SiteNavi
            title={siteMetadata.title}
            color="primary"
            {...this.props}
          />
          <div className="row justify-content-center pt-4 pb-6">
            <div className="col-lg-6 col-9">
              <img
                src={pathPrefix + '/img/logo_square.svg'}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <SiteNavi title={siteMetadata.title} {...this.props} />
        <div id="about" className="container-fluid bg-odd py-6">
          <div>
            <div id="about-title" className="row justify-content-center">
              <div className="col-7">
                <p className="text-center display-4">Hello, I'm Leslie Marie</p>
              </div>
            </div>
            <div id="about-text" className="row justify-content-center">
              <div className="col-7">
                <p className="text-center">
                  As a wife, and mother, I understand the importance of
                  capturing life's precious memories. However, it isn't always
                  easy finding that balance between quality, and cost. I make it
                  a point to ensure no client needs to make this compromise.
                </p>
              </div>
            </div>
            <div id="about-line" className="row justify-content-center">
              <div className="col-1 text-center">
                <svg height="50" width="10">
                  <line
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="50"
                    style={{ stroke: 'rgb(0,0,0)', strokeWidth: 2 }}
                  />
                </svg>
              </div>
            </div>
            <div id="about-signature" className="row justify-content-center">
              <div className="col-7">
                <img
                  src={pathPrefix + '/img/signature.jpg'}
                  className="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="container-fluid bg-even py-5">
          <div id="portfolio-title" className="row justify-content-center">
            <div className="col-7">
              <p className="text-center display-4">My Portfolio</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <ul className="nav nav-fill justify-content-center text-uppercase">
                {tagLinks}
              </ul>
            </div>
          </div>
          <div id="portfolio-grid" className="row justify-content-center">
            <div className="col-lg-8 col-10">
              <div className="row">{projectLinks}</div>
            </div>
          </div>
        </div>

        <div id="contact" className="container-fluid bg-odd py-6">
          <div className="row justify-content-center">
            <div className="col-7 text-center display-4">Get In Touch</div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-7 text-center">
              I am a local photographer who enjoys the art of capturing memories
              that can be enjoyed for years to come. If you like my style, and
              would like to work together, please contact me!
            </div>
          </div>
          <div id="contact-info" className="row justify-content-center pt-6">
            <div className="col-md-3 col-7 text-center">
              <a className="contact-link" href="tel://1-559-972-9013">
                <div className="row">
                  <div className="col-12 text-primary">
                    <svg height="100" width="100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#48C0E5"
                        strokeWidth="2"
                        fill="transparent"
                      />
                      <FontAwesomeIcon icon={faPhone} transform="shrink-10" />
                    </svg>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">+1(559)972-9013</div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-7 text-center">
              <a
                className="contact-link"
                href="mailto:leslievera2012@gmail.com"
              >
                <div className="row">
                  <div className="col-12 text-primary">
                    <svg height="100" width="100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#48C0E5"
                        strokeWidth="2"
                        fill="transparent"
                      />
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        transform="shrink-10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">leslievera2012@gmail.com</div>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-7 text-center">
              <a className="contact-link" href="maps:36.3174153,-119.4717621">
                <div className="row">
                  <div className="col-12 text-primary">
                    <svg height="100" width="100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#48C0E5"
                        strokeWidth="2"
                        fill="transparent"
                      />
                      <FontAwesomeIcon
                        icon={faLocation}
                        transform="shrink-10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">Visalia, CA</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div id="enquire" className="container-fluid py-5 bg-dark">
          <div className="row justify-content-center">
            <div className="text-center display-4 text-white">Enquire</div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-sm-7">
              <form>
                <div className="form-row justify-content-center">
                  <div className="col-6 pb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputFN"
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div className="col-6 pb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputLN"
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <div className="col-6 pb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="col-6 pb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="inputTel"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <div className="col-6 pb-3">
                    <select className="form-control" defaultValue="Event Type*">
                      <option>Event Type*</option>
                      <option>Wedding/Engagement</option>
                      <option>Newborn</option>
                      <option>Portrait</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-6 pb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="inputDate"
                      placeholder="Event Date"
                    />
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

export const projectQuery = graphql`
  query ProjectQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    portfolio: allContentfulPhotoGallery(limit: 9) {
      totalCount
      projects: edges {
        project: node {
          id
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
