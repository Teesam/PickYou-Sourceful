"use client"

import AttributeDisplay from './attributeDisplay';
import { useGlobalStore } from './store/contextAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Attribute {
    name: string,
    weight: string
  }
  
  interface FormData {
    title: string;
    attributes: {name: string, score: string}[]
  }

const Upcoming = () => {

    const { choices, setChoices } = useGlobalStore()

    const deleteChoice = (item: FormData) => {
        const newArray = choices.filter(obj=> obj.title !== item.title);
        setChoices(newArray);
    }

    return (
        <div>
            <AttributeDisplay />
            <div className='flex flex-wrap mt-8 w-full justify-evenly xl:justify-between'>
                {
                    choices.map((choice, i) => {
                        return <div key = {i} className='sm:w-[40%] xl:w-[30%] mr-4 hover:bg-grey shadow-md shadow-lightGrey transition duration-300 mb-4 flex flex-col border rounded-md border-grey p-4 cursor-pointer'>
                                    <div className='w-full flex justify-between'>
                                        <p className='font-bold'>{choice.title}</p>
                                        <button onClick={() => deleteChoice(choice)}>
                                            <FontAwesomeIcon className='cursor-pointer' icon={faXmark} />
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        {
                                            choice.attributes.map((att, i) => {
                                                return <p key={i}>{`${att.name} - ${att.score}`}</p>
                                            })
                                        }
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default Upcoming;