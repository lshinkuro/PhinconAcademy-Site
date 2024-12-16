import React from 'react';
import { Star } from 'lucide-react';

const Alumni = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The bootcamp transformed my career. I went from zero coding knowledge to landing my dream job."
    },
    {
      name: "Michael Chen",
      role: "Data Engineer at Amazon",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The hands-on experience and mentorship were invaluable. Best career decision I've made."
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Architect at Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Phincon Academy's curriculum is cutting-edge and perfectly aligned with industry needs."
    }
  ];

  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Alumni Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our graduates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;