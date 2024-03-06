import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "../components/Todo/todo-reducer.tsx";
import {TTodo, TTodoCreate} from "../components/Todo/todo-class.tsx";

console.log("initial store")
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }

    , devTools: true
    , preloadedState: {
        todo: {
            status: "initialized"
            , data: new Array<TTodo>().concat(TTodoCreate("Start"))
        }
    }
})