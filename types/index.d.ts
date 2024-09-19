declare type NavLink = {
    title: string,
    path: string
}

declare type ProjectData = {
    type: 'commercial' | 'research' | 'hobby'
    banner: any,
    title: string,
    description: string,
    techstack: string,
    liveurl?: string
    github?: string
}

declare type SkillGroup = {
    title: string,
    skills: string[]
}