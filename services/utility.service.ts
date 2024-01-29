import { Person } from "../data/models/model.dto";

export function sortString(a: string | null, b: string | null): number {
    if(a === null && b === null) return 0;
    if(a === null) return -1;
    if(b === null) return 1
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

export function sortPeople(a: Person, b: Person) {
    if(a.nameLast === null && b.nameLast === null) 
        return sortString(a.nameFirst, b.nameFirst);
    if(a.nameLast === null) return 1;
    if(b.nameLast === null) return -1;
    const compareLast = sortString(a. nameLast, b.nameLast);
    if(compareLast !== 0) return compareLast;
    return sortString(a.nameFirst, b.nameFirst);
}