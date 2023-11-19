"use client"

import AttributeDisplay from './attributeDisplay';
import { useGlobalStore } from './store/contextAPI';

const Upcoming = () => {

    const { choices } = useGlobalStore()

    return (
        <div>
            <AttributeDisplay />
            {
                choices.map((choice, i) => {
                    return <div key = {i} className='hover:bg-grey transition duration-300 mb-4 flex justify-evenly w-full h-[5rem] border rounded-md border-grey p-4 cursor-pointer'>
                               
                                {/* <p className='w-[15%]'>{choice.title}</p>
                                <div className='w-[70%] flex justify-between'>
                                    <div className='flex items-center'>
                                        <p className='mr-4 font-bold'>Calories</p>
                                        <div className='flex flex-col'> 
                                            <p>{`score: ${choice.calories.score}`}</p>
                                            <p>{`Weight: ${choice.calories.weight}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='mr-4 font-bold'>Cost</p>
                                        <div className='flex flex-col'> 
                                            <p>{`score: ${choice.cost.score}`}</p>
                                            <p>{`Weight: ${choice.cost.weight}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='mr-4 font-bold'>Taste</p>
                                        <div className='flex flex-col'> 
                                            <p>{`score: ${choice.taste.score}`}</p>
                                            <p>{`Weight: ${choice.taste.weight}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='mr-4 font-bold'>Protein</p>
                                        <div className='flex flex-col'> 
                                            <p>{`score: ${choice.protein.score}`}</p>
                                            <p>{`Weight: ${choice.protein.weight}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='w-[15%]'>Edit</button> */}
                            </div>
                })
            }
        </div>
    )
}

export default Upcoming;