'use client'

import {useEffect, useState, useMemo} from 'react';
import AttributeDisplay from "@/components/attributeDisplay";
import useDecisionCalculator from "@/components/hooks/useDecisionCalculator";
import { useGlobalStore } from "@/components/store/contextAPI";

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
    const {attributes, choices} = useGlobalStore();
    const { calculatedChoices } = useDecisionCalculator();
    // const [ highestChoice, setHighestChoice ] = useState<HighestChoice[]>([])
    useEffect(() => {
        // Memoize the calculatedChoices array to ensure stable dependencies
        const memoizedCalculatedChoices = useMemo(() => calculatedChoices, [calculatedChoices]);
      
        console.log(memoizedCalculatedChoices);
      
        if (memoizedCalculatedChoices.length > 0) {
          const result = memoizedCalculatedChoices.reduce(
            (maxSumObject: MaxSumObject, currentObject: CalculatedChoices) => {
              const currentSum = currentObject.scores.reduce((acc, num) => acc + num, 0);
      
              if (currentSum > maxSumObject.sum) {
                return { title: currentObject.title, sum: currentSum, numbers: currentObject.scores };
              } else {
                return maxSumObject;
              }
            },
            { title: '', sum: 0, numbers: [] } // Initial maxSumObject with a sum of 0
          );
      
          console.log(result);
          // Perform other actions or logic based on the result if needed
        }
      }, [calculatedChoices]);

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
                                            <p className='font-bold '>{item.title}</p>
                                            <p>{`Total Score: ${sum}`}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className='font-bold text-[1.2rem] mb-4'>Winner</p>
                    <div className='sm:w-[40%] xl:w-[30%] mr-4 hover:bg-grey shadow-md shadow-lightGrey transition duration-300 mb-4 flex flex-col border rounded-md border-grey p-4 cursor-pointer'>
                        {/* <p>{item.title}</p>
                        <p>{`Total Score: ${highestChoice}`}</p> */}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Page;