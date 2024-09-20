import ugrp_banner from '@/public/images/projects/ugrp.png'
import clearance_banner from '@/public/images/projects/clearance.png'
import hifi_banner from '@/public/images/projects/hifi.png'

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
        title: 'about',
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
        techstack: 'Django, ReactJS, Material UI',
        github: 'https://github.com/rnium/sec_clearance',
        liveurl: 'https://www.secclearance.com/'
    },
    {
        title: "SEC UGRP",
        type: 'commercial',
        banner: ugrp_banner,
        description: `SEC Undergraduate Result Portal is an 
                        EdTech for semester result processing and document generation`,
        techstack: 'Django, HTML, SASS, Bootstrap, JQuery',
        github: 'https://github.com/rnium/sec_ugrp',
        liveurl: 'https://secugrp.com/'
    },
    {
        title: "HiFi Computer",
        type: 'commercial',
        banner: hifi_banner,
        description: `The official eCommerce platform of HiFi Computer, The leading IT solution in Sylhet, Bangladesh `,
        techstack: 'Django, NextJS',
        liveurl: 'https://hificomputerbd.com/'
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
            skills: ['Linux', 'Docker', 'Nginx', 'Gunicorn', 'PostgreSQL', 'MySQL']
        },
        {
            title: "Others",
            skills: ['Markdown', 'Git', 'Github Actions', 'Vim', 'Postman']
        }
    ]
]