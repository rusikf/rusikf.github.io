import me from './images/me.jpeg';

export default function About() {
  return (
    <div className="row description-block align-items-center">
      <div className='text-md-start col-12 col-sm-6 d-flex flex-column'>
        <p className='lead'>
          Hi! I am Ruslan Coroliov.
          Full-stack web developer with experience in the backend: Ruby ( Ruby on Rails ) and frontend: Typescript/Javascript (React, Vue, Plain JS)
        </p>

        <small>
        The ability to learn new things with a mix of good work-life balance is part of the daily routine, that's why I love remote work, which helps me be productive!
        </small>
        </div>
      <div className='col-12 col-sm-6'>
        <img src={me} alt='My avatar' className='profile_image'/>
      </div>
    </div>
  )
}
