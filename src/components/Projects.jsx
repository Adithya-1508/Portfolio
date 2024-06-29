
import React from "react";
import vpn from '../assets/vpn.png'
import snapgram from '../assets/Snapgram.jpg'
import Workout from '../assets/Workout_Buddy.jpg'

import Footer from './Footer'
const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform rotate-0 hover:rotate-3 transition-transform duration-300" style={{ background: '#192841' }}>
            {title=='Snap Gram' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={snapgram} alt="" />
            </a>}
            {title=='Workout Buddy' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Workout} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Workout Buddy',
        description:'Workout Buddy is a MERN stack application designed for fitness enthusiasts to create and manage personalized workout routines. This dynamic web application utilizes MongoDB, Express, React, and Node.js to facilitate seamless CRUD operations for adding, editing, and deleting workouts. Users can tailor their exercise plans to meet their fitness goals, making it an ideal platform for organizing and tracking fitness progress.',
        image: {vpn},
        git:'https://github.com/Adithya-1508/MERN-Stack-Workout-Website',
        technologies:['MongoDb' ,'ReactJS' , 'NodeJS']
    },
    {
        title:'Snap Gram',
        description:'SnapGram is a dynamic social media platform that I developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This full-stack application offers users a seamless experience for sharing and interacting with photos and posts in real-time. ',
        image: {snapgram},
        git:"https://github.com/Adithya-1508/mern-stack-application/tree/master",
        technologies:[ 'React JS', 'tailwind CSS', 'MongoDb', 'NodeJS']
    }
]

export default Projects
