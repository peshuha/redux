
export type TTodo = {
    id: number
    name: string
    is_complete: boolean
}

let id: number = 0;
export function TTodoCreate(name: string): TTodo{
    return {
        id: ++id
        , name
        , is_complete: false
    }
}