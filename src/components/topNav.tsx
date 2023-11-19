'use client'

import React,{useState, useEffect, SetStateAction, Dispatch} from 'react';
import { useGlobalStore } from "./store/contextAPI";

interface TopNavProps {
    passNavToProp: (data: string) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setFormType: Dispatch<SetStateAction<string>>
}
  
interface NavItems {
    title: string,
    id: number
}

const TopNav: React.FC<TopNavProps> = ({ passNavToProp, onClick, setFormType }) => {

    const [ navItems ] = useState<NavItems[]>([
        {title: 'Current Decision', id: 1},
        {title: 'Decision History', id: 2},
    ]);

    const [currentNavItem, setCurrentNavItem] = useState<string>('Current Decision');
    const { choices, attributes } = useGlobalStore();

    const handleNavItem = (navItem: NavItems) => {
        setCurrentNavItem(navItem.title);
        passNavToProp(navItem.title);
    }

    useEffect(() => {}, [ choices.length])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, formType: string) => {
        onClick(event);
        setFormType(formType)
    }

    return(
        <nav className='mb-[5rem] flex justify-between'>
            <ul className='sm:w-[50%] flex p-2 bg-grey rounded-md w-[25rem] justify-evenly items-center xl:bg-red sm:p-1'>
                {
                    navItems.map(item => {
                        return (
                            <li onClick={()=>handleNavItem(item)} className={currentNavItem === item.title ? 'sm:text-[.5rem] sm: transition duration-300 rounded-md pr-4 pl-4 pt-2 pb-2 bg-myWhite cursor-pointer text-black font-bold' : 'sm:text-[.5rem] border-[4] cursor-pointer pr-4 pl-4 pt-2 pb-2 text-deepGrey transition duration-300'} key = {item.id}>{item.title}</li>
                        )
                    })
                }
            </ul>
            <div className='sm:flex sm:flex-col'>
                <button disabled = { choices.length > 0 } 
                    onClick={(event) => handleClick(event, 'attribute')}
                    className="sm:mb-2 sm:text-[.8rem] sm:p-1 text-myWhite p-4 rounded-md cursor-pointer bg-black"
                >{attributes.length < 1 ? 'Make Decision' : 'Add Attribute'}
                </button>
                <button 
                    onClick={(event) => handleClick(event, 'choice')}
                    className="sm:mb-2 sm:text-[.8rem] sm:p-1 text-myWhite p-4 rounded-md cursor-pointer bg-black"
                >Add Choice
                </button>

            </div>
        </nav>
    )
}

export default TopNav;