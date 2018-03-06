import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link, { withPrefix } from 'gatsby-link'
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import LazyLoad from 'react-lazyload'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'
import Portfolio from '../components/Portfolio'

import selfImage from '../layouts/img/self-portrait.jpg'
import logo from '../layouts/img/logo_square.svg'
import signature from '../layouts/img/signature.svg'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faLocation from '@fortawesome/fontawesome-free-solid/faLocationArrow'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'

class Home extends Component {
  render() {
    const { transition } = this.props

    const bgLinks = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const projects = get(this, 'props.data.portfolio.projects')

    const bgImages = get(this, 'props.data.allImageSharp.edges')
    bgImages.forEach((data, i) => {
      bgLinks.push(get(data, 'node.sizes.src'))
    })

    return (
      <div style={transition && transition.style}>
        <Helmet title={siteMetadata.title} />
        <SiteNavi
          title={siteMetadata.title}
          color="primary"
          projects={this.props.data.portfolio.projects}
          {...this.props}
        />

        <div
          id="home"
          className="container-fluid"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${
              bgLinks[1]
            })`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-10em',
          }}
        >
          {/* <div className="row justify-content-center pt-7 pb-9">
            <div className="col-lg-6 col-9">
              <img src={logo} className="img-fluid" />
            </div>
          </div> */}
        </div>

        {/* <SiteNavi
          title={siteMetadata.title}
          projects={this.props.data.portfolio.projects}
          {...this.props}
        /> */}
        {/* <div id="about" className="container-fluid bg-odd py-6">
          <div>
            <div id="about-title" className="row justify-content-center">
              <div className="col-lg-7 col-sm-10 col-12">
                <p className="text-center display-4">Hello, I'm Leslie Marie</p>
              </div>
            </div>
            <div id="about-text" className="row justify-content-center">
              <div className="col-lg-7 col-sm-10 col-12">
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
              <div className="col-lg-2 col-sm-3 col-6">
                <img src={signature} className="mx-auto d-block" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <Portfolio projects={projects} {...this.props}/> */}

        {/* <div id="contact" className="container-fluid bg-odd py-6">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-sm-10 col-12 text-center display-4">
              Get In Touch
            </div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-lg-7 col-sm-10 col-12 text-center">
              I am a local photographer who enjoys the art of capturing memories
              that can be enjoyed for years to come. If you like my style, and
              would like to work together, please contact me!
            </div>
          </div>
          <div id="contact-info" className="row justify-content-center pt-6">
            <div className="col-sm-3 col-12 text-center">
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
            <div className="col-sm-3 col-12 text-center">
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
            <div className="col-sm-3 col-12 text-center">
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
        </div> */}

        {/* <div
          id="enquire"
          className="container-fluid py-5 bg-dark"
          style={{
            backgroundImage: `url(${bgLinks[0]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="row justify-content-center">
            <div className="text-center display-4 text-white">Enquire</div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-lg-6 col-sm-10">
              <Form>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name*"
                      required
                    />
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name*"
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      required
                    />
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input type="select" name="event" id="event" required>
                      <option>Event Type*</option>
                      <option>Wedding/Engagement</option>
                      <option>Newborn</option>
                      <option>Porttrait</option>
                      <option>Other</option>
                    </Input>
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input type="date" name="date" id="date" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs={12}>
                    <Input
                      type="textarea"
                      name="otherText"
                      id="otherText"
                      placeholder="Other info..."
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="justify-content-center" row>
                  <Button color="primary">Submit</Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div> */}
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
      }
    }
    portfolio: allContentfulPhotoGallery(limit: 9) {
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
            sizes(maxWidth: 300) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          sizes {
            src
          }
        }
      }
    }
  }
`
