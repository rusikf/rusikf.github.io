import me from './images/me.jpeg';

export default function About() {
  return (
    <div className="row description-block align-items-center">
      <div className='text-md-start col-12 col-sm-6 d-flex flex-column'>
        <p className='lead'>
          Hi! I am Ruslan Coroliov.
          Full-stack web developer with experience in the backend: Ruby ( Ruby on Rails ) and frontend: Javascript ES6, ES5 (React, Vue)
        </p>

        <small>
          Work-life balance is an important part of my life, that's why I love remote work, which helps me be productive with tools like Toggle, Pivotal Tracker, etc.
        </small>
        </div>
      <div className='col-12 col-sm-6'>
        <img src={me} alt='My avatar' className='profile_image'/>
      </div>
    </div>
  )
}
