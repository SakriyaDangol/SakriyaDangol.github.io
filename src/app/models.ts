export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    link?: string;
}

export interface Assignment {
    title: string;
    githubUrl: string;
    liveDemoUrl?: string;
}

export interface Day {
    number: number;
    assignments: Assignment[];
}

export interface Module {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    days: Day[];
}
