import React, { createContext, useState } from 'react';

export const Store = createContext();

export const MyContextProvider = (props) => {
  const [Button1, setButton1] = useState(false);
  const [Button2, setButton2] = useState(false);
  const [Button3, setButton3] = useState(true);
  const [Button4, setButton4] = useState(false);
  
 
  

  return (
    <Store.Provider value={{ Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4}}>
      {props.children}
    </Store.Provider>
  );
};
