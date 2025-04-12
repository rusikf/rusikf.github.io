import me from './images/me.png';
import { Button, Card } from 'flowbite-react';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-3xl w-full mx-auto">
        <div className="w-full mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-70 animate-pulse"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img
                src={me}
                alt='My avatar'
                className='w-32 h-32 sm:w-64 sm:h-64 object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
          </div>
        </div>

        <div className="w-full p-4 flex flex-col space-y-4 text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Hi there! 👋
          </h1>
          <p className="text-lg">
            I'm Ruslan Coroliov, a passionate Software Engineer from Moldova. 🧑‍🌾 ( real, not AI 🤖 )
          </p>
          <p className="text-lg">
            A full-stack web developer proficient in Ruby (Ruby on Rails) for the backend and Typescript/Javascript (React, Vue, Plain JS) for the front end.
          </p>
          <p className="text-sm">
            As a remote work enthusiast, I thrive on learning new tech while maintaining a healthy work-life balance, ensuring productivity and innovation go hand in hand in every daily task.
          </p>
        </div>
      </div>
    </div>
  )
}
