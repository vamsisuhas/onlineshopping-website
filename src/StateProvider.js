import React, {createContext, useContext, useReducer} from "react";

//prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({reducer,intialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);