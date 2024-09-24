import ugrp_banner from '@/public/images/projects/ugrp.png'
import clearance_banner from '@/public/images/projects/clearance.png'
import hifi_banner from '@/public/images/projects/hifi.png'
import fclassroom_banner from '@/public/images/projects/fclassroom.png'
import tv3_banner from '@/public/images/projects/tv3.png'
import grabit_banner from '@/public/images/projects/grabit.png'
import lungspot_banner from '@/public/images/projects/lungspot.png'
import passito_banner from '@/public/images/projects/passito.jpg'
import { RiGithubFill, RiTelegramFill, RiLinkedinFill } from '@remixicon/react';


export const navlinks: NavLink[] = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'works',
        path: '/my-works'
    },
    {
        title: 'about-me',
        path: '/about-me'
    },
    {
        title: 'contact',
        path: '/contact-me'
    }
]

export const projects: ProjectData[] = [
    {
        title: "SEC Clearance Portal",
        type: 'commercial',
        banner: clearance_banner,
        description: `SEC Clearance Portal built for seamless clearance request and
                        managing applications in a modern way`,
        techstack: 'Django, DRF, ReactJS',
        github: 'https://github.com/rnium/sec_clearance',
        liveurl: 'https://www.secclearance.com/'
    },
    {
        title: "SEC UGRP",
        type: 'commercial',
        banner: ugrp_banner,
        description: `SEC Undergraduate Result Portal is an 
                        EdTech for semester result processing and document generation`,
        techstack: 'Django, DRF, HTML, Bootstrap, JQuery',
        github: 'https://github.com/rnium/sec_ugrp',
        liveurl: 'https://secugrp.com/'
    },
    {
        title: "HiFi Computer",
        type: 'commercial',
        banner: hifi_banner,
        description: `The official eCommerce platform of HiFi Computer, The leading IT solution in Sylhet, Bangladesh `,
        techstack: 'Django, DRF, NextJS',
        liveurl: 'https://hificomputerbd.com/'
    },
    {
        title: "Flipped Classroom",
        type: 'other',
        banner: fclassroom_banner,
        description: `An LMS EdTech, built under a research project of Directorate of Technical Education, Bangladesh`,
        techstack: 'Django, DRF, JQuery, ChartJS',
        github: 'https://github.com/rnium/flippedclassroom',
        liveurl: 'https://flippedclassroom.pythonanywhere.com/'
    },
    {
        title: "TechnoVenture 3.0",
        type: 'other',
        banner: tv3_banner,
        description: `Official website of TechnoVenture 3.0 for attracting participants and managing contest registrations`,
        techstack: 'Django, DRF, NextJS',
        github: 'https://github.com/rnium/eeefest_frontend',
        liveurl: 'https://www.seceeefest.tech'
    },
    {
        title: "GrabIT",
        type: 'other',
        banner: grabit_banner,
        description: `A web scraping application for extracting IT product data from various websites`,
        techstack: 'FastAPI, ReactJS',
        github: 'https://github.com/rnium/grabit'
    },
    {
        title: "LungSpot",
        type: 'other',
        banner: lungspot_banner,
        description: `Web app for detecting the type of lung tumor by using CT scan images, utilizing a 
        deep learning model`,
        techstack: 'Keras, Tensorflow, Django, ReactJS',
        github: 'https://github.com/rnium/lungspot'
    },
    {
        title: "Passito",
        type: 'other',
        banner: passito_banner,
        description: `A simple password manager desktop app that stores hashed passwords in the local machine`,
        techstack: 'Python, Tkinter, SQLite',
        github: 'https://github.com/rnium/passito'
    },
]

export const skillGroupsData: SkillGroup[][] = [
    [
        {
            title: 'Languages',
            skills: ['C++', 'Python', 'JavaScript', 'TypeScript']
        }
    ],
    [
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'ReactJS', 'NextJS']
        },
        {
            title: 'Backend',
            skills: ['Django', 'DRF', 'FastAPI']
        },
    ],
    [
        {
            title: 'Server',
            skills: ['Linux', 'Docker', 'Nginx', 'uWSGI', 'Gunicorn', 'PostgreSQL', 'MySQL']
        },
        {
            title: "Others",
            skills: ['Data Structures & Algorithms', 'Markdown', 'Git', 'Github Actions', 'Vim', 'Postman']
        }
    ]
]

export const socials: Social[] = [
    {
        url: 'https://github.com/rnium',
        title: 'github/rnium',
        icon: RiGithubFill,
        type: 'general'
    },
    {
        url: 'https://t.me/si_rony',
        title: 't.me/si_rony',
        icon: RiTelegramFill,
        type: "messaging"
    },
    {
        url: 'https://www.linkedin.com/in/sirony',
        title: 'linkedin/sirony',
        icon: RiLinkedinFill,
        type: 'general'
    },
]

export const aboutme_details = [
    'Greetings!',
    `I am a full-stack developer with professional experience in building
        secure and reliable web applications.
        I enjoy solving complex problems and learning new
        skills. I am passionate about creating high-quality
        products that follows best practices and industry standards.`,
    `I've worked on a variety of projects over the years using multiple 
        technology stack and I'm proud of the progress I've made.
        In recent times, I've worked with government institutions like Directorate of Technical Education 
        to support their research project and Sylhet Engineering College (SEC) to digitalize their traditional
        workflows. The projects that I've worked on are currently in production and 
        I'm officially the maintainer of them.`,
    `I love creating solutions that help people overcome challenges, simplify their tasks,
        and improve their daily lives. It's fulfilling to see how ideas can make a real difference.
        As someone who is open to learning, I enjoy exploring new technologies that can be applied to my projects, 
        enhancing the application's efficiency, robustness, scalability, 
        and user friendliness. I am eager to collaborate with a team that
        works on innovative projects where I can 
        share ideas and make something even better.`,
]