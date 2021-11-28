// Creates a Redux store that holds the state of the app.
import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./reducers.js";

const store = createStore(reducer);

// export default createStore(reducers)

export default store;