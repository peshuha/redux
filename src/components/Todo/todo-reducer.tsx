import {createSlice} from "@reduxjs/toolkit";
import {TTodo, TTodoCreate} from "./todo-class.tsx";
export const todoSlice = createSlice({
    name: "@@todo"
    , initialState: {
        status: "idle",
        data: Array<TTodo>()
    }
    , reducers: {
        complete: {
            reducer: (state, action) => {
                const {id, is_complete} = action.payload;
                return {
                    ...state
                    , data: state.data.map((item) => {
                        if(item.id === id){
                            return {...item, is_complete: is_complete}
                        }
                        return item
                    })
                }
            }
            , prepare: (id: number, is_complete: boolean) => ({
                payload: {
                    id, is_complete
                }
            })
        }
        , add: {
            reducer: (state, action) => {
                state.data.push(action.payload)
            }
            , prepare: (name: string) => {
                return {payload: TTodoCreate(name)}
            }
        },
    }
})

export const {add, complete} = todoSlice.actions