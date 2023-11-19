'use client'

import {useState} from 'react';
import { useGlobalStore } from './store/contextAPI';

const Heading = () => {

    const {userName} = useGlobalStore()
    return(
        <div className="flex justify-between mb-12 items-center sm:items-start">
            <div>
                <h1 className='font-bold text-[2rem]'>PickYou</h1>
                <p className='text-deepGrey'>Make the best decisions for you.</p>
            </div>
            <p>{`Hi, ${userName}`}</p>
        </div>
    )
}

export default Heading;