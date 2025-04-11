import elker from './images/elker-project.jpeg';
import plexa from './images/plexa-project.jpeg';
import speedbot from './images/speedbot-project.jpeg';
import grafiq from './images/grafiq-project.jpeg';
import harvester from './images/harvester-project.jpeg';
import adoptech from './images/adoptech-project.png';
import { Badge, Modal, ModalHeader, ModalBody } from 'flowbite-react';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: Array<{
    name: string;
    color: "info" | "success" | "warning" | "gray";
  }>;
}

const projects: Project[] = [
  {
    id: 'adoptech',
    title: 'Adoptech',
    description: 'Policies and Agreements for your business.',
    image: adoptech,
    url: 'https://adoptech.co.uk/',
    technologies: [
      { name: 'Typescript', color: 'info' },
      { name: 'React', color: 'success' },
      { name: 'Ruby on Rails', color: 'warning' }
    ]
  },
  {
    id: 'elker',
    title: 'Elker',
    description: 'A platform for sending anonymous reports and feedbacks',
    image: elker,
    url: 'https://elker.com',
    technologies: [
      { name: 'Vue.js', color: 'info' },
      { name: 'Ruby on Rails', color: 'success' },
      { name: 'Vuex', color: 'warning' }
    ]
  },
  {
    id: 'speedbot',
    title: 'Site Speed Bot',
    description: 'SEO tool for test load speed of any website',
    image: speedbot,
    url: 'https://app.sitespeedbot.com/',
    technologies: [
      { name: 'Ruby on Rails', color: 'success' },
      { name: 'React', color: 'info' },
      { name: 'Redux', color: 'warning' },
      { name: 'Docker', color: 'info' },
      { name: 'Bash', color: 'info' },
      { name: 'Jquery', color: 'gray' }
    ]
  },
  {
    id: 'plexa',
    title: 'Plexa',
    description: 'A social network for doctors and patients',
    image: plexa,
    url: 'https://plexa.ai',
    technologies: [
      { name: 'Ruby on Rails', color: 'success' },
      { name: 'React Native', color: 'info' },
      { name: 'Redux', color: 'warning' },
      { name: 'Jquery', color: 'gray' }
    ]
  },
  {
    id: 'grafiq',
    title: 'Grafiq',
    description: 'A map of graph connections about family violence perpetrator pathways in Australia',
    image: grafiq,
    url: 'https://grafiq.herokuapp.com/',
    technologies: [
      { name: 'Ruby on Rails', color: 'success' },
      { name: 'Vue.js', color: 'info' },
      { name: 'Vuex', color: 'warning' }
    ]
  },
  {
    id: 'harvester',
    title: 'Harvester',
    description: 'A platform for farmers to sell their products directly to consumers',
    image: harvester,
    url: 'https://harvester.com',
    technologies: [
      { name: 'Ruby on Rails', color: 'success' },
      { name: 'React', color: 'info' },
      { name: 'Redux', color: 'warning' }
    ]
  }
];

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen w-full px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group h-full">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full">
                  <img
                    src={project.image}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    alt={`${project.title} project`}
                    onClick={() => openModal(project.image, project.title)}
                  />
                  <div className="p-4 bg-white flex flex-col flex-grow">
                    <h5 className="text-xl font-bold mb-2">{project.title}</h5>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-300 block mb-3"
                    >
                      {project.url}
                    </a>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <Badge key={`${project.id}-${tech.name}`} color={tech.color}>
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} size="4xl">
        <ModalHeader>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            {selectedTitle}
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="max-h-[70vh] object-contain"
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
