import { Maker } from "./model.maker"

export declare type Part = {
    id: number
    name: string | null
    makerId: number | null
    maker: Maker | null
    notes: string | null
}