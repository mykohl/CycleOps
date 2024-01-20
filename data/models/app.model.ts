export type appBranding = {
    title: string,
    tagline: string
}
export type appMenu = {
    order: number,
    title: string,
    titleIcon: string,
    sections: string[]
};
export type appSection = {
    id: string,
    order: number,
    title: string,
    description: string,
    titleIcon: string,
    image: string,
    imageAlt: string,
    action: string  
};