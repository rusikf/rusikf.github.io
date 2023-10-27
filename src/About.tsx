import me from './images/me.jpeg';

export default function About() {
  return (
    <div className="row description-block align-items-center">
      <div className='text-md-start col-12 col-sm-6 d-flex flex-column'>
        <p className='lead'>
        Hi there! 👋
        </p>
        <p>
        I'm Ruslan Coroliov, a passionate Software Engineer from Moldova. 🧑‍🌾 ( real, not AI 🤖 )
        </p>
        <p>A full-stack web developer proficient in Ruby (Ruby on Rails) for the backend and Typescript/Javascript (React, Vue, Plain JS) for the front end.
        </p>

        <small>
        As a remote work enthusiast, I thrive on learning new tech while maintaining a healthy work-life balance, ensuring productivity and innovation go hand in hand in every daily task.
        </small>
        </div>
      <div className='col-12 col-sm-6'>
        <img src={me} alt='My avatar' className='profile_image'/>
      </div>
    </div>
  )
}
