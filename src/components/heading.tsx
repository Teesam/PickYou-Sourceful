'use client'

import { useGlobalStore } from './store/contextAPI';

const Heading = () => {

    const {userName} = useGlobalStore()
    return(
        <div className="flex justify-between mb-12 items-center sm:items-start">
            <div>
                <p className='font-bold text-[2rem]'>PickYou</p>
                <p className='text-deepGrey'>Make the best decisions for you.</p>
            </div>
            <p>{ userName.length > 1 ?  `Hi, ${userName}` : 'Hello!'}</p>
        </div>
    )
}

export default Heading;