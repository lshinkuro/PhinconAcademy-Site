import React from 'react';
import { Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Phincon Academy</h2>
          <p className="text-xl text-gray-600">Building the next generation of tech talent</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Users className="w-12 h-12 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
                <p className="text-gray-600">Learn from industry professionals with years of experience in leading tech companies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-12 h-12 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                <p className="text-gray-600">Our programs are recognized and valued by top tech companies worldwide.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BookOpen className="w-12 h-12 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Practical Curriculum</h3>
                <p className="text-gray-600">Project-based learning with real-world applications and industry-standard tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;