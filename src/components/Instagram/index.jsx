import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

import instaLogo from './Instagram_Icon_inverted.svg'
import instaFont from './Instagram_logo.svg'

class Instagram extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const instafeedTarget = 'instafeed'

      return (
        <div id="instagram" className="container-fluid pt-5 bg-even">
          <div id={instafeedTarget} className="row">
            <Instafeed
              limit="12"
              ref="instafeed"
              sortBy="most-liked"
              target={instafeedTarget}
              template="<a href='{{link}}' class='col-sm-4 col-12'><img src='{{image}}' /></a>"
              userId="3948751531"
              clientId="901aa4a9e5b04e75bc9a533bd1a0accd"
              accessToken="3948751531.1677ed0.f378c19fe99f4741b4f934cfa72a92bb"
            />
          </div>
       </div>
      )
   }
}

export default Instagram