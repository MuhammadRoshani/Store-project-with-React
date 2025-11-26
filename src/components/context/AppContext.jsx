import { createContext, useReducer } from "react";
import reducer from "../../reducer";

// context store
// we use state and dispatch for to broadcast and use all information and actions to our components.
export const AppContext = createContext();

function AppProvider({ children }) {
  // state values : in addedToCart : save uniq number of our product and in addedProduct : we save all information about our phones such as name, price and ...

  const initialState = { addedToCart: 0, addedProducts: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
