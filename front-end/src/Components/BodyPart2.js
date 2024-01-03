import React from 'react'
import './BodyPart2.css'
const BodyPart2 = () => {
  return (
    <div style={{ display: "block" }}>
        <div className="ThirdDiv">
          <img
            src="https://th.bing.com/th/id/OIP._PcayS7O4gmXYuhzl1agswHaFj?rs=1&pid=ImgDetMain"
            className="HomeImages"
            alt="Pic here "
          />
          <div className="Paragraph">
            <h1 className="ParagraphHeader">
              “2.4 million views & an invitation to speak at TEDWomen.”
            </h1>
            <div className="ParagraphText">
              “I’ve been speaking in public for over four decades to crowds of
              15,000. I was sure I didn’t need a speaking coach – at least
              that’s what I thought before I met Helena. Helena is one of the
              most gifted speaking coaches I’ve ever encountered. With over 2.4
              million views on YouTube, my talk has prompted responses from all
              7 continents and invitations to speak across the U.S. and Europe,
              including at TEDWomen.”
            </div>
            <h3 className="ParagraphEnd">
              Dr. Paula Stone Williams, Author & Gender Equity Advocate
            </h3>
          </div>
        </div>
        {/*  second Person data  */}
        <div className="ThirdDiv">
          <img
            src="https://th.bing.com/th/id/OIP.7miCGwTsm4Nt25V4vwkRHAAAAA?rs=1&pid=ImgDetMain"
            className="HomeImages"
            alt="Pic here "
          />
          <div className="Paragraph">
            <h1 className="ParagraphHeader">
              “People meet me & say ‘Oh, I watched your TEDx Talk and it was
              amazing!’”
            </h1>
            <div className="ParagraphText">
              “It’s actually mind-boggling how impactful my talk has been. It’s
              given me a level of credibility I didn't have before. I've secured
              critical partnerships for my organization from people who found us
              by watching the talk. People meet with me and say, ‘Oh, I watched
              your TEDx Talk and it was amazing.’ It’s led to paid keynotes
              across the country. Helena was nothing short of amazing.”
            </div>
            <h3 className="ParagraphEnd">
              Matt Vogl, Executive Director of the National Mental Health
              Innovation Center
            </h3>
          </div>
        </div>
        {/* Third Person data */}
        <div className="ThirdDiv">
          <img
            className="HomeImages"
            src='https://www.stthomas.edu/_media-library/_images/school-of-engineering/electrical-engineering/770x770/stthomas-electrical-engineering-faculty-orser.jpg'
          alt='Pic here'
          />
          <div className="Paragraph">
            <h1 className="ParagraphHeader">
              “More requests for keynote speeches than I can
              accomodate!”
            </h1>
            <div className="ParagraphText">
              “I was a good public speaker before working with her, but Helena
              took my speaking skills to the next level. She has an uncanny
              ability to zero in on what matters and what should be left out of
              a speech. Thanks to Helena’s coaching, my career has blossomed. I
              now receive more requests for keynote speeches than I can
              accommodate.”
            </div>
            <h3 className="ParagraphEnd">
              Mara Mintzer, Founder of Growing Up Boulder
            </h3>
          </div>
        </div>
      </div>
  )
}

export default BodyPart2
