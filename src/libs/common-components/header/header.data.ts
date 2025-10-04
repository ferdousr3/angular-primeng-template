export const HEADER_DATA: HeaderData[] = [
    {
        id: 1,
        title: 'Home',
        path: '',
    },
    {
        id: 2,
        title: 'About',
        path: 'about',
    },
    {
        id: 3,
        title: 'Contact',
        path: 'contact',
    },
    {
        id: 4,
        title: 'Post',
        path: 'post',
    },
]

export interface HeaderData {
    id: number
    title: string
    path: string
}
