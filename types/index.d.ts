declare type NavLink = {
    title: string,
    path: string
}

declare type ProjectData = {
    type: 'commercial' | 'other'
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

declare interface Social {
    url: string
    title: string
    type: 'messaging' | 'general'
    icon: RemixiconComponentType
}