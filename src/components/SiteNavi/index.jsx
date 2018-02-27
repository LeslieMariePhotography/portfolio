import React, { Component } from 'react'
import Link from 'gatsby-link'

class SiteNavi extends Component {
  render() {
    const { location, title, color } = this.props

    return (
      <nav
        className={
          color === 'primary'
            ? 'navbar navbar-expand-sm text-uppercase navbar-dark bg-faded'
            : 'navbar sticky-top navbar-expand-sm text-uppercase navbar-light bg-white'
        }
      >
        <a
          className={color === 'primary' ? 'invisible' : 'navbar-brand'}
          href="/"
        >
          <div className="site-title">Leslie Marie</div>
          <div className="site-subtitle">Photography</div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                location.pathname === '/#about' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={
                location.pathname === '/#portfolio'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/#portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li
              className={
                location.pathname === '/#contact'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/#contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li
              className={
                location.pathname === '/#enquire'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/#enquire" className="nav-link">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
