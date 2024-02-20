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
export type dialogResult = {
    action: string;
    data: any;
}
export type dialogAction = {
    order: number;
    name: string;
    action: string;
}
export type dialogType = {
    type: string;
    actions: dialogAction[];
}
export type dialogConfig = {
    type: string;
    data?: any | null | undefined;
}