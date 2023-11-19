"use client"

import { useEffect, useState } from 'react';
import { useGlobalStore } from "./store/contextAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type Attribute = {
    name: string,
    weight: string
}

const AttributeDisplay = () => {
    const {attributes, setAttributes } = useGlobalStore();
    const [currentAttribute, setCurrentAttribute] = useState<Attribute>()
    useEffect(() => {}, [attributes.length])

    const deleteAttribute = (item: Attribute) => {
        const newArray = attributes.filter(obj=> obj.name !== item.name);
        setAttributes(newArray);
    }
    return <div className='flex items-center flex-wrap'>
            {
                attributes.map((item, i) => {
                    return <div className='sm:text-[.7rem] mb-2 flex items-center mr-4 p-2 bg-grey rounded-md' key = {i}>
                                <p className='mr-2'>{`${item.name} - ${item.weight} `}</p>
                                <button onClick={() => deleteAttribute(item)}>
                                    <FontAwesomeIcon className='cursor-pointer' icon={faXmark} />
                                </button>
                            </div>
                })
            }
        </div>
    
}

export default AttributeDisplay;