import React, { createContext, useContext, useState, ReactNode } from "react";


interface MeasureData {
  id: any;
  date: number | string;
  fullName: string;
  shoulder: number;
  neck: number;
  sleeve: number;
  chest: number;
  shirtLength: number;
  lap: number;
  trouser: number;
}
interface CapData {
  id: any;
  date: number | string;
  fullName: string;
  length: number;
  width: number;

}

interface DataContextType {
  items: MeasureData[];
  capItems: CapData[];
  addItem: (data: MeasureData) => void;
  addCapItem: (data: CapData) => void;
  removeItem: (id: string) => void;
  removeCapItem: (id: string) => void;
  updateItem: (id: string, newData: Partial<MeasureData>) => void;
}


const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [items, setItems] = useState<MeasureData[]>([]);
  const [capItems, setCapItems] = useState<CapData[]>([]);

  const addItem = (data: MeasureData) => {
    setItems((prevItems) => [...prevItems, data]);
  };

  const addCapItem = (data: CapData) => {
    setCapItems((prevItems) => [...prevItems, data]);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const removeCapItem = (id: string) => {
    setCapItems((prevItems) =>
      prevItems.filter((capItem) => capItem.id !== id)
    );
  };

  const updateItem = (id: string, newData: Partial<MeasureData>) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  return (
    <DataContext.Provider
      value={{
        items,
        capItems,
        addItem,
        addCapItem,
        removeItem,
        removeCapItem,
        updateItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
