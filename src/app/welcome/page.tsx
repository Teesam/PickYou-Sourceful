'use client'

import { useState } from 'react';
import { useGlobalStore } from "@/components/store/contextAPI";
import {useRouter} from 'next/navigation';


const Page: React.FC = () => {
    const {setUserName, setChoices, setAttributes} = useGlobalStore()
    const [name, setName ] = useState<string>('')
    const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        setName(e.target.value);
    }
    const router = useRouter();
    const resetStore = ():void => {
        setChoices([]);
        setAttributes([]);
        router.push('/home')
    }

    return(
        <div className="flex flex-col justify-between bg-grey min-h-screen max-h-screen max-w-screen p-8 overflow-x-hidden">
            <div>
                <p className="text-[2rem] font-bold">PickYou</p>
            </div>
            <div className="flex justify-center">
                <div className="items-center xl:w-[50%] sm:w-full">
                    <p className="font-light text-[3rem] mb-4">Welcome</p>
                    <div className="flex flex-col">
                        <label className="mb-2">First Name</label>
                        <input 
                            onChange={addName}
                            className='w-full mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2' 
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button style={name.length < 1 ? {opacity: '0.4'} : {}} disabled = {name.length < 1} onClick={resetStore} className="sm:mb-2 sm:text-[.8rem] sm:p-1 sm:pr-2 sm:pl-2 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black">Proceed</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <p>Powered by Sourceful</p>
            </div>
        </div>
    )
}

export default Page;