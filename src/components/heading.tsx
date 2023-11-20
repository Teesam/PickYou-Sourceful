'use client'

import {useState, useEffect} from 'react';
import { useGlobalStore } from './store/contextAPI';

const Heading = () => {

    const [name, setName] = useState<string>('')
    const getUsername = async () => {
        try{
            const { userName} = useGlobalStore();
            setName(userName)
        }catch(error){
            throw Error('There is a probel')
        }
    }

    useEffect(() => {getUsername()}, [])
    
    console.log(name);
    
    return(
        <div className="flex justify-between mb-12 items-center xl:flex-row sm:flex-col sm:items-start">
            <div className='sm:mb-8 xl:mb-0'>
                <p className='font-bold text-[2rem]'>PickYou</p>
                <p className='text-deepGrey'>Make the best decisions for you.</p>
            </div>
            <p className='text-[1.2rem]'>{`Hi, ${name}`}</p>
        </div>
    )
}

export default Heading;