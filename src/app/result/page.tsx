'use client'

import {useEffect, useState} from 'react';
import AttributeDisplay from "@/components/attributeDisplay";
import useDecisionCalculator from "@/components/hooks/useDecisionCalculator";
import Link from 'next/link';

interface CalculatedChoices {
    title: string;
    scores: number[];
  }

interface MaxSumObject {
    title: string;
    sum: number;
    numbers: number[];
  }

const Page = () => {
    const { calculatedChoices } = useDecisionCalculator();
    const [ highestChoice, setHighestChoice ] = useState<MaxSumObject>({
        title: '',
        sum: 0,
        numbers: []
    })
    useEffect(() => {
        if (calculatedChoices.length > 0) {
          const result = calculatedChoices.reduce(
            (maxSumObject: MaxSumObject, currentObject: CalculatedChoices) => {
              const currentSum = currentObject.scores.reduce((acc, num) => acc + num, 0);
      
              if (currentSum > maxSumObject.sum) {
                return { title: currentObject.title, sum: currentSum, numbers: currentObject.scores };
              } else {
                return maxSumObject;
              }
            },
            { title: '', sum: 0, numbers: [] }
          );
      
          setHighestChoice(result);
     
        }
      }, [calculatedChoices.length < 1]); 

    return(
        <div  className="bg-myWhite min-h-screen max-w-screen p-10 overflow-x-hidden pb-16">
            <div>
                <p className="text-[2rem] font-bold">PickYou</p>
            </div>
            <div>
                <div className='w-full mt-8 mb-8'>
                    <p className='font-bold text-[1.2rem] mb-4'>Attributes</p>
                    <AttributeDisplay />
                </div>
                <div>
                    <p className='font-bold text-[1.2rem] mb-4'>Choices</p>
                    <div className="flex flex-wrap"> 
                        {
                            calculatedChoices.map((item, i) => {
                                const sum: number = item.scores.reduce((acc, current) => acc + current, 0);
                                return <div key = {i} className='sm:w-[40%] xl:w-[30%] mr-4 hover:bg-grey shadow-md shadow-lightGrey transition duration-300 mb-4 flex flex-col border rounded-md border-grey p-4 cursor-pointer'>
                                            <p className='font-bold sm:mb-2'>{item.title}</p>
                                            <p>{`Total Score: ${sum}`}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className='font-bold text-[1.2rem] mb-4'>Winner</p>
                    {
                        highestChoice.title !== '' ?
                            <div className='sm:w-[40%] xl:w-[30%] mr-4 hover:bg-grey shadow-md shadow-lightGrey transition duration-300 mb-4 flex flex-col border rounded-md border-grey p-4 cursor-pointer'>
                                <p className='font-bold sm:mb-2'>{highestChoice.title}</p>
                                <p>{`Total Score: ${highestChoice.sum}`}</p>
                            </div>
                        : ''
                    }
                </div>  
                <Link href='/' className='flex justify-end mt--13'>
                    <button className="sm:mb-2 sm:text-[.8rem] sm:p-1 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black">Finish</button>
                </Link>
            </div>
        </div>
    )
}

export default Page;