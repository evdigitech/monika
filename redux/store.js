import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import sagas from './sagas';

const sagaMiddleware= createSagaMiddleware();
const middlewares=[sagaMiddleware]

export function configerStore(initialState) {
  const store = createStore(reducers, initialState,applyMiddleware(...middlewares));
  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}