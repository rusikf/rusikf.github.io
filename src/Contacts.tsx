import { Card } from 'flowbite-react';

export const Contacts = () => {
  const email = 'ruslan.coroliov+3@outlook.com';

  const contactLinks = [
    {
      name: 'Email',
      url: `mailto:${email}`,
      color: 'text-blue-600 hover:text-blue-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ruslan-coroliov/',
      color: 'text-purple-600 hover:text-purple-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rusikf',
      color: 'text-indigo-600 hover:text-indigo-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Get In Touch
        </h1>

        <div className="group">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative p-8 bg-white rounded-xl">
              <div className="flex flex-col space-y-4 max-w-md mx-auto">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 ${link.color}`}
                  >
                    <div className="mr-4">
                      {link.icon}
                    </div>
                    <span className="text-lg font-medium">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
