'use client'

import { useGlobalStore } from './store/contextAPI';

const Heading = () => {

    const {userName} = useGlobalStore();
    console.log(userName);
    return(
        <div className="flex justify-between mb-12 items-center xl:flex-row sm:flex-col sm:items-start">
            <div className='sm:mb-8 xl:mb-0'>
                <p className='font-bold text-[2rem]'>PickYou</p>
                <p className='text-deepGrey'>Make the best decisions for you.</p>
            </div>
            <p className='text-[1.2rem]'>{`Hi, ${userName}`}</p>
        </div>
    )
}

export default Heading;