export type branding = {
    title: string,
    tagline: string
}
export type feature = {
    id: string,
    order: number,
    title: string,
    titleIcon: string,
    components: component[],
    rolesAllowed: string[] | string
};
export type component = {
    id: string,
    order: number,
    isHighlight: boolean,
    title: string,
    description: string,
    titleIcon: string,
    image: string,
    imageAlt: string,
    route: string,
    rolesAllowed: string[] | string
};