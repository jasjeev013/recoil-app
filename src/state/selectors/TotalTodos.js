import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";


export const totalTodosCount = selector({
    key: 'totalTodosCount',
    get: ({get}) => {
        const todos = get(todoState);
        return todos.length;
    }
});