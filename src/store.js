import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers/reducer";

const logger = createLogger({ collapsed: true });
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
middleware.unshift(logger);

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
