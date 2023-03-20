import { createStore } from "redux";

const initState = {}

const rootReducer = (state = initState, action) => {
    return state;
}

const store = createStore(rootReducer);

export default store;