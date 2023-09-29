// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [password,setPassword]=useState('');

  return (
    <DataContext.Provider value={{ data, setData ,password,setPassword }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
