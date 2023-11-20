'use client'

import React,{useState, useEffect, SetStateAction, Dispatch} from 'react';
import { useGlobalStore } from "./store/contextAPI";

interface TopNavProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setFormType: Dispatch<SetStateAction<string>>
}

const TopNav: React.FC<TopNavProps> = ({ onClick, setFormType }) => {

    const { choices, attributes } = useGlobalStore();
    useEffect(() => {}, [ choices.length ])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, formType: string) => {
        onClick(event);
        setFormType(formType)
    }

    return(
        <nav className='mb-[5rem] flex justify-between xl:items-center'>
            <div className='sm:flex justify-between xl:justify-end sm:justify-evenly w-full'>
                <button disabled = { choices.length > 0 } 
                    style={choices.length > 0 ? {opacity: '0.4'} : {}}
                    onClick={(event) => handleClick(event, 'attribute')}
                    className="xl:mr-4 sm:text-[.8rem] xl:text-[1rem] sm:p-2 sm:pr-4 sm:pl-4 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black"
                >Add Attribute</button>
                <button 
                    disabled={attributes.length < 2}
                    style={attributes.length < 2 ? {opacity: '0.4'} : {}}
                    onClick={(event) => handleClick(event, 'choice')}
                    className="sm:text-[.8rem] xl:text-[1rem] sm:p-1 sm:pr-2 sm:pl-2 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black"
                >Add Choice</button>

            </div>
        </nav>
    )
}

export default TopNav;