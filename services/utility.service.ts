import { Person } from "../data/models/model.dto";

export function sortNullSafe(a: string | number | null, b: string | number | null): number {
    if(a === null && b === null) return 0;
    if(a === null) return -1;
    if(b === null) return 1
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

export function sortPeople(a: Person, b: Person) {
    if(a.nameLast === null && b.nameLast === null) 
        return sortNullSafe(a.nameFirst, b.nameFirst);
    if(a.nameLast === null) return 1;
    if(b.nameLast === null) return -1;
    const compareLast = sortNullSafe(a. nameLast, b.nameLast);
    if(compareLast !== 0) return compareLast;
    return sortNullSafe(a.nameFirst, b.nameFirst);
}
