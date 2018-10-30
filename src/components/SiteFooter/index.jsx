import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest} from '@fortawesome/fontawesome-free-brands'

class SiteFooter extends Component {
  render() {
    return (
      <footer className="bg-black py-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-auto px-4">
              <a className="text-white" href="http://www.facebook.com/lesliemariephotos">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="col-auto px-4">
              <a className="text-white" href="https://www.instagram.com/lesliemarie_photography/?hl=en">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="col-auto px-4">
              <a className="text-white" href="#">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-auto">&copy; 2018 Leslie Marie Photography</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default SiteFooter
