import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Adithya Vijayakumar, a MERN stack developer with a passion for building robust web applications and contributing to open-source projects. I specialize in creating scalable backend systems and engaging frontend experiences using MongoDB, Express.js, React, and Node.js.
🚀 Currently, I'm working on developing a SaaS platform using Next.js, leveraging its powerful features for server-side rendering and optimized performance. This project allows me to combine my expertise in full-stack development with cutting-edge technologies.
🌟 Open-source contribution is a key part of my professional journey. I actively participate in various projects, collaborating with developers worldwide to create impactful solutions and give back to the community.
🔍 When I'm not coding, you'll find me cycling through scenic routes or indulging in my unique hobby of hunting for bugs and security issues in applications. This passion for cybersecurity not only keeps me fit but also sharpens my problem-solving skills and deepens my understanding of robust software architecture.
💡 I'm always eager to take on new challenges and stay at the forefront of web development trends. Let's connect and explore how we can create innovative solutions together!</p>

          <ButtonLink
            url='https://drive.google.com/file/d/1W48TsBwBro77q2dSz3slkIUUeDh8T3BL/view?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;