import React from 'react'


const MyBackground=()=>{


  return(
    <div className="background-page-wrapper">
    <div className="about-me-sidebar">
    <div className="image-wrapper">
    <img className="sidebar-image" src ="images/me.jpeg" alt="Joseph Sutherland"/>
    <figcaption className="about-tag">
    <h5 className="about-me-descriptor">Me</h5>
    </figcaption>
    </div>
    </div>
    <main className="article-wrap">
    <article className="about-me-text">
    Graduate of CodeClan's intensive 16 Week Professional Software Development Course, completing the course with a PDA in Software Development .
    This was a wide ranging course with over 800 hours of coding. The strong practical focus of the course built skills day-on-day and week-on-week,
    providing a constant progression that engendered the habits necessary to continue to grow and learn.
     The course mixed individual learning with team projects and regular pair programming exercises, replicating realistic work practices.
     As a newly qualified developer through CodeClan, I am a self-motivated career changer, moving into software development after a career in retail. I have a genuine personal interest in programming, and have been enjoying learning new languages and frameworks and love the end result of coding. When I first realised my interest, I used online courses and evening classes to 'test the water' and found that this was something I loved and wished to pursue as a career, before pushing forward by training through CodeClan.I especially enjoy the responsiveness of front-end code and how thoughtful code can result in massive impact on both end users and other programmers. In my time as a programmer I
     have used all of the following:
     <div className="about-list-div">
     <ul className="about-me-list list-one">
     <li>Ruby</li>
     <li>Javascript</li>
     <li>Java</li>
     <li>MongoDb</li>
     <li>HighCharts</li>
     <li>Python</li>
     <li>Sinatra</li>
     <li>Vue</li>
     <li>React</li>
     <li>SQL</li>
     <li>PHP</li>
     </ul>
     <ul className="about-me-list list-two">
     <li>Express</li>
     <li>React Native</li>
     <li>Pair Programming</li>
     <li>Agile Work Practices</li>
     <li>Git/Github</li>
     <li>Leaflet</li>
     <li>Spring</li>
     <li>TDD with JUnit</li>
     <li>TDD with Mocha</li>
     <li>TDD with Selenium</li>
     </ul>
     </div>
    </article>
    </main>
    </div>
  )
}

export default MyBackground;
