import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppContextProvider = (props)=>{
  const [searchFilter,setSearchFilter] = useState(
    {
      title:' ',
      location:''
    }
  );
  const [isSearched,setisSearched] = useState(false);
  const value = {
      setSearchFilter,searchFilter,
      isSearched,setisSearched
  }
  return (<AppContext.Provider value = {value}>
         {props.children}
  </AppContext.Provider>)
}