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

declare type UseGetFileReturnType = {
    loaded: boolean;
    setLoaded: (loaded: boolean) => void;
    loading: boolean;
    success: boolean;
    error: string | null;
    perform_get: (params?: Record<string, any>) => Promise<void>;
    reset: () => void;
};


declare type UsePostReturnType<T = any> = {
    data: T | null;
    loaded: boolean;
    setLoaded: (loaded: boolean) => void;
    loading: boolean;
    success: boolean;
    error: any;
    perform_post: (payload?: Record<string, any>) => Promise<void>;
    reset: () => void;
};
