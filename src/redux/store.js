import { createStore } from "redux";
import { Reducer } from "./MainReduser";

export const store = createStore(Reducer);
