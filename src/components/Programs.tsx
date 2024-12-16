import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-12 h-12 text-blue-500" />,
      description: "Master both frontend and backend development with modern technologies.",
      duration: "12 weeks"
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-12 h-12 text-blue-500" />,
      description: "Learn to build and maintain data pipelines and infrastructure.",
      duration: "10 weeks"
    },
    {
      title: "Cloud Computing",
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      description: "Become proficient in cloud services and DevOps practices.",
      duration: "8 weeks"
    }
  ];

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600">Choose your path to success</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="text-sm text-blue-600 font-semibold">
                Duration: {program.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;