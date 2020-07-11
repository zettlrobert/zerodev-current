import React, { Fragment } from 'react'

import '../../scss/legaldetails.scss'

const LegalDetails = () => {
  return (
    <Fragment>
      <div className="legaldetails-wrapper">
        <footer>
          <div className="footer-content">

            <h1>Legal Disclosure</h1>

            <p>Information in accordance with Section 5 TMG</p>
            
            <div className="address">
              <p>
                Thaler Weg
              </p>
              <p>
                8
              </p>
              <p>
                83734 Hausham
              </p>
            </div>
          
            <div className="contact-information">
              <h2>Contact Information</h2>
              <p>
                Telephone: 015120029565
              </p>
              <p>
                E-Mail: <a href="mailto:zrdev.info@gmail.com">zrdev.info@gmail.com</a>
              </p>
              <p>
                Internet address: <a href="www.zerodev.dev" target="_blank">www.zerodev.dev</a>
              </p>
            </div>

            <div className="disclaimer">
              <h2>Disclaimer</h2>
              <p>
                Accountability for content
              </p>
              <p>
                The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
                our own content on these web pages. In this matter, please note that we are not obliged to monitor 
                the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
                Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
                §§ 8 to 10 of the Telemedia Act (TMG).
              </p>
              <p>
                Accountability for links
              </p>
              <p>
                Responsibility for the content of 
                external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
                evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
                link immediately.
              </p>
              <p>
                Copyright @zerodev
              </p>
              <p>
                Our web pages and their contents are subject to German copyright law. Unless 
                expressly permitted by law, every form of utilizing, reproducing or processing 
                works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
                Individual reproductions of a work are only allowed for private use. 
                The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
              </p>
            </div>

            <div className="provided-by">
              <p>
                <i>Quelle: </i><a class="link" href="http://www.translate-24h.de" rel="noopener noreferrer" target="_blank">translate-24h.de</a>
              </p>
            </div>

            </div>
          </footer>
      </div>
    </Fragment>
  )
}

export default LegalDetails;