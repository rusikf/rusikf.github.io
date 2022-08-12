interface Certificate {
  title: string;
  link: string;
  organization: string;
}

export default function Experience() {
  const certificates: Certificate[] = [
    {
      title: 'Programming Foundations: Algorithms',
      link: 'https://www.linkedin.com/learning/certificates/252781d0c3c0bc622b43f4ee23f3ca476bc24731fc47d5d31eebaa4afab8793c?trk=share_certificate',
      organization: 'LinkedIn Learning - July 2022'
    },
    {
      title: 'TypeScript Essential Training',
      link: 'https://www.linkedin.com/learning/certificates/e31c8df4736e6b90bb020c36f9dd009acdc95e5c484a64a42b78404653911cd3?trk=share_certificate',
      organization: 'LinkedIn Learning - June 2022'
    },
    {
      title: 'SQL (Basic) Certificate',
      link: 'https://www.hackerrank.com/certificates/5325f670d03c',
      organization: 'HackerRank - January 2022'
    },
    {
      title: 'Back End Development and APIs (Node, Express, MongoDB) Certificate',
      link: 'https://www.freecodecamp.org/certification/fcc49ceb0e6-b33e-4d74-8314-e27aa65db621/back-end-development-and-apis',
      organization: 'FreeCodeCamp - September 2021'
    },
    {
      title: 'JavaScript (Intermediate) Certificate',
      link: 'https://www.hackerrank.com/certificates/52ab00a834bf',
      organization: 'HackerRank - May 2021'
    },

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
        <h4>Full-stack web developer (Frontend Focus: Typescript/Javascript, Ruby)</h4>
        <p>Adoptech - Remote - Since March 2022</p>
      </div>
      <div>
        <h4>Full-stack web developer (Backend Focus: Ruby, Javascript)</h4>
        <p>Kodolabs - Remote - From May 2016 to February 2022</p>
      </div>
      <div>
        <h4>Ruby Backend Developer</h4>
        <p>IMBS - Onsite- From June 2014 to May 2016</p>
      </div>
      <div>
        <h4>Junior Ruby developer</h4>
        <p>My course - Onsite - From January 2014 to June 2014</p>
      </div>

      <h2><u>Education</u></h2>
      <p>Mechanical Engineering ( Engineer’s Degree )<br></br>
      Moscow state university of mechanical engineering
      </p>
      <h3>Certificates</h3>
      {
        certificates.map(( { title, link, organization }: Certificate) => {
          return <p key={title}>
            <span style={{ display: 'block'}}>{ organization }</span>
            <a href={ link } target="_blank" rel="noopener noreferrer">{ title }</a>
          </p>
        })
      }
      </div>
    </div>
  )
}
