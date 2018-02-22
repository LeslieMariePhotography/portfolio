import React, { Component } from 'react'
import Link from 'gatsby-link'

class SiteNavi extends Component {
  render() {
    const { location, title, color } = this.props

    return (
      <nav className={color === "primary" ? 'navbar navbar-expand-sm text-uppercase navbar-dark bg-faded' : 'navbar sticky-top navbar-expand-sm text-uppercase navbar-light bg-white'}>
        <a className={color === "primary" ? 'invisible' : 'navbar-brand'} href="/">
          <div className="site-title">Leslie Marie</div>
          <div className="site-subtitle">Photography</div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={location.pathname === '/blog/' ? 'nav-item active' : 'nav-item'}>
              <Link to="/blog/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className={location.pathname === '/profile/' ? 'nav-item active' : 'nav-item'}>
              <Link to="/profile/" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
