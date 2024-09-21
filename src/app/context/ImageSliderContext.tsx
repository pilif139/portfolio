"use client";

import React, {createContext, useContext, useState} from "react";

type SliderContextType = {
  page: number;
  direction: number;
  paginate: (newDirection: number) => void;
} | undefined;

const SliderContext = createContext<SliderContextType>(undefined);

export default function SliderContextProvider({children}: {children: React.ReactNode}){
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
      <SliderContext.Provider value={{page, direction, paginate}}>
        {children}
      </SliderContext.Provider>
  )
}

export const useSlider = () =>{
  const context = useContext(SliderContext);
  if(context === undefined){
    throw new Error("Error used outside of SliderContextProvider");
  }
  return context;
}