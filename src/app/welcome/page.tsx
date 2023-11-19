'use client'

import { useGlobalStore } from "@/components/store/contextAPI";
import Link from 'next/link';


const Page: React.FC = () => {
    const {setUserName} = useGlobalStore()
    const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    return(
        <div className="flex flex-col justify-between bg-grey min-h-screen max-w-screen p-10 overflow-x-hidden pb-16">
            <div>
                <p className="text-[2rem] font-bold">PickYou</p>
            </div>
            <div className="flex justify-center">
                <div className="items-center w-[50%]">
                    <p className="font-light text-[3rem] mb-4">Welcome</p>
                    <div className="flex flex-col">
                        <label className="mb-2">First Name</label>
                        <input 
                            onChange={addName}
                            className='w-full mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2' 
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link href="/home">
                            <button className="sm:mb-2 sm:text-[.8rem] sm:p-1 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black">Proceed</button>
                        </Link>
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