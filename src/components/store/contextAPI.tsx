'use client';

import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface Attribute {
  name: string,
  weight: string
}

interface FormData {
  title: string;
  attributes: {name: string, score: string}[]
}

interface GlobalStoreProviderProps {
  children: ReactNode;
}

interface contextProps {
  choices: FormData[],
  setChoices: Dispatch<SetStateAction<FormData[]>>,
  attributes: Attribute[],
  setAttributes: Dispatch<SetStateAction<Attribute[]>>
  userName: string,
  setUserName: Dispatch<SetStateAction<string>>
}

const GlobalStore = createContext<contextProps>({
  choices: [],
  setChoices: (): FormData[] => [],
  attributes: [],
  setAttributes: (): Attribute[] => [],
  userName: '',
  setUserName: (): string => ''
})

export const GlobalStoreProvider: React.FC<GlobalStoreProviderProps> = ({children}) => {
  const [ choices, setChoices ] = useState<FormData[]>([]);
  const [ attributes, setAttributes ] = useState<Attribute[]>([]);
  const [ userName, setUserName ] = useState<string>('')

  return <GlobalStore.Provider  value={{ choices, setChoices, attributes, setAttributes, userName, setUserName }}>
          {children}
        </GlobalStore.Provider>
}

export const useGlobalStore = () => {
  const store = useContext(GlobalStore);

  if (!store) {
    throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
  }

  return store;
};
