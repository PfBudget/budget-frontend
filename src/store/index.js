import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {keysReducer, setJwtToken} from "./slices/KeysSlice";


const store = configureStore({
    reducer: {
        keys: keysReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setJwtToken,
};