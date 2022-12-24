import { INavbarData } from "./helper";

export const navBarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Home'
    },
    {
        routeLink: 'courses',
        icon: 'fa fa-laptop-code',
        label: 'Courses',
        items: [
            {
                routeLink: 'courses/dotNetCore',
                label: '.Net Core'
            },
            {
                routeLink: 'courses/angular',
                label: 'Angular 13+'
            },
            {
                routeLink: 'courses/databases',
                label: 'PostgreSQL'
            },
            {
                routeLink: 'courses/C#',
                label: 'C sharp'
            },
        ]
    },
    {
        routeLink: 'bootcamps',
        icon: 'fa fa-chalkboard-teacher',
        label: 'Bootcamps'
    },
    {
        routeLink: 'enterprise',
        icon: 'fa fa-briefcase',
        label: 'Enterprise'
    },
    {
        routeLink: 'resources',
        icon: 'fa fa-globe',
        label: 'Resources'
    },
    {
        routeLink: 'gallery',
        icon: 'fa fa-image', 
        label: 'Gallery'
    },
    {
        routeLink: 'help',
        icon: 'fa fa-circle-question',
        label: 'Help'
    },

]