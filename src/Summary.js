export default function Summary() {
  const certificates = [
    {
      title: 'CSS Certificate',
      link: 'https://www.hackerrank.com/certificates/dfe091545ea4',
      organization: 'HackerRank - April 2021'
    },
    {
      title: 'Rest API (Intermediate) Certificate',
      link: 'https://www.hackerrank.com/certificates/cd453396c5a2',
      organization: 'HackerRank - March 2021'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      link: 'https://www.freecodecamp.org/certification/fcc49ceb0e6-b33e-4d74-8314-e27aa65db621/javascript-algorithms-and-data-structures',
      organization: 'FreeCodeCamp - February 2021'
    },
    {
      title: 'Responsive Web Design Certificate',
      link: 'https://www.freecodecamp.org/certification/fcc49ceb0e6-b33e-4d74-8314-e27aa65db621/responsive-web-design',
      organization: 'FreeCodeCamp - October 2020'
    },
    {
      title: 'JavaScript (Basic) Certificate',
      link: 'https://www.hackerrank.com/certificates/98cbf4e9eb61',
      organization: 'HackerRank - September 2020'
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      link: 'https://www.hackerrank.com/certificates/0bae232a16cd',
      organization: 'HackerRank - August 2020'
    },
    {
      title: 'React ( Basic ) Certificate',
      link: 'https://www.hackerrank.com/certificates/e2f4a0b104e2',
      organization: 'HackerRank - July 2020'
    },
    {
      title: 'Front End Libraries Certificate ( React | Jquery | Bootstrap | Sass | Redux )',
      link: 'https://www.freecodecamp.org/certification/fcc49ceb0e6-b33e-4d74-8314-e27aa65db621/front-end-libraries',
      organization: 'FreeCodeCamp - 2020'
    },
    {
      title: 'EF Standard English Test ( EF SET ) | Intermediate',
      link: 'https://www.efset.org/cert/vbxnWV',
      organization: 'EFSET - 2020'
    }
  ]

  return (
    <div className='row my-4'>
      <div className="col-md-4 offset-md-4 text-start">
      <h2><u>Work Experience</u></h2>
      <div>
        <h4>Full-stack web developer</h4>
        <p>Kodolabs - Remote - Since May 2016</p>
          <p>Full-stack developer with Ruby on Rails experience
            with strong knowledge
          in React, Vue and legacy jQuery and pure Javascript code</p><p>
          Participated in developing multiple startups from scratch to production.
          Features: Messaging API, Social media feed, complex filtering, Step builder on Vue.js,
          Postgres speed optimization, React.js filters, and management, etc.
          </p>
      </div>
      <div>
        <h4>Ruby Backend Developer</h4>
        <p>IMBS - Moscow, Russia - From June 2014 to May 2016
          Billing API integration + dashboard. FFmpeg video processing.
        </p>
      </div>
      <div>
        <h4>Junior Ruby developer</h4>
        <p>My course - Moscow - From January 2014 to June 2014</p>
        <p>Developed webinar platform from scratch ( backbone.js + rails + HTML
markups)</p>
      </div>

      <h2><u>Education</u></h2>
      <p>Mechanical engineering
      Moscow state university of mechanical engineering (MAMI) - Moscow
      </p>
      <h3>Certificates</h3>
      {
        certificates.map(( { title, link, organization }) => {
          return <p>
            <span style={{ display: 'block'}}>{ organization }</span>
            <a href={ link } target="_blank" rel="noopener noreferrer">{ title }</a>
          </p>
        })
      }
      </div>
    </div>
  )
}
