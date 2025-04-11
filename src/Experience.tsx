import {
  Badge,
  Timeline,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
  TimelineContent,
} from 'flowbite-react';

interface Certificate {
  title: string;
  link: string;
  organization: string;
}

interface Job {
  title: string;
  period: string;
  company: string;
  location: string;
  technologies: string[];
  color: string;
}

export const Experience = () => {
  const certificates: Certificate[] = [
    {
      title: 'Full Stack Open ( Javascript/Typescript, Node.js, React, CSS )',
      link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/e3a48a1d48757dae5cc59cbd525bd352',
      organization: 'University of Helsinki - April 2025'
    },
    {
      title: 'The EF Standard English Test (EF SET)  | C1 - Advanced',
      link: 'https://www.efset.org/cert/d26oJm',
      organization: 'EF Education First - October 2023'
    },
    {
      title: 'CS50x (Computer Science)',
      link: 'https://certificates.cs50.io/ad55c6c1-4393-4659-93f8-4f69f5dfdbff.pdf',
      organization: 'Harvard University - September 2023'
    },
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
    }
  ]

  const jobs: Job[] = [
    {
      title: 'Full-stack web developer (Frontend Focus)',
      period: 'Since March 2022',
      company: 'Adoptech',
      location: 'Remote',
      technologies: ['Typescript', 'Javascript', 'Ruby'],
      color: 'info'
    },
    {
      title: 'Full-stack web developer (Backend Focus)',
      period: 'May 2016 - February 2022',
      company: 'Kodolabs',
      location: 'Remote',
      technologies: ['Ruby', 'Javascript'],
      color: 'success'
    },
    {
      title: 'Ruby Backend Developer',
      period: 'June 2014 - May 2016',
      company: 'IMBS',
      location: 'Onsite',
      technologies: ['Ruby'],
      color: 'success'
    },
    {
      title: 'Junior Ruby developer',
      period: 'January 2014 - June 2014',
      company: 'My course',
      location: 'Onsite',
      technologies: ['Ruby'],
      color: 'success'
    }
  ]

  return (
    <div className="min-h-screen w-full px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Experience
        </h1>

        <div className="group mb-12">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative p-6 bg-white rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 text-purple-600 mr-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Work Experience
                </h2>
              </div>

              <Timeline>
                {jobs.map((job, index) => (
                  <TimelineItem key={index}>
                    <TimelineContent>
                      <TimelineTitle>{job.title}</TimelineTitle>
                      <TimelineTime>{job.period}</TimelineTime>
                      <p className="text-gray-600">{job.company} - {job.location}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} color={job.color as any}>{tech}</Badge>
                        ))}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>

        <div className="group mb-12">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative p-6 bg-white rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 text-purple-600 mr-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Education
                </h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Mechanical Engineering (Engineer's Degree)</h3>
                <p className="text-gray-600">Moscow state university of mechanical engineering</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative p-6 bg-white rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 text-purple-600 mr-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Certificates
                </h2>
              </div>

              <div className="space-y-3 pr-2">
                {certificates.map(({ title, link, organization }: Certificate) => (
                  <div key={title} className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-sm text-gray-500 mb-1">{organization}</p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                    >
                      {title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
