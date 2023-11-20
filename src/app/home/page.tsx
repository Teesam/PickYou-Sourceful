"use client"

import {useState} from 'react';
import Heading from '@/components/heading';
import TopNav from '@/components/topNav';
import Modal from '@/components/modal';
import Upcoming from '@/components/upcoming';
import { useGlobalStore } from '@/components/store/contextAPI';
import {useRouter} from 'next/navigation';

export default function Page() {
  const [modal, setModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>('attribute');
  const addNewAttribute = (): void => {
    setModal(true);
  }
  const { choices, attributes } = useGlobalStore();

  const closeModal = (): void => {
    setModal(false);
  }

  const router = useRouter();

  const viewResult = () => {
    localStorage.setItem("choices", JSON.stringify({
        choices: choices,
        attributes: attributes
    }));
    router.push('/result');
  }

  const startDecision = () => {
    setModal(true)
  }

  return (
    <main className="bg-myWhite min-h-screen max-w-screen p-10 overflow-x-hidden pb-16">
      <Heading/>
      
      {attributes.length > 0 ? <TopNav setFormType = {setFormType} onClick={addNewAttribute} /> : '' }

      {
        attributes.length < 1 ? <div className='w-full h-[60vh] flex justify-center items-center'>
                                    <button disabled = { choices.length > 0 } 
                                        style={choices.length > 0 ? {opacity: '0.4'} : {}}
                                        onClick={startDecision}
                                        className="sm:mb-2 sm:text-[.8rem] sm:p-4 text-myWhite xl:p-8s rounded-md cursor-pointer bg-black"
                                    >{attributes.length < 1 ? 'Make Decision' : 'Add Attribute'}
                                    </button>
                                </div>
            : <Upcoming />
      }
    
      

      {
        choices.length < 1 ? '' : 
        <div className='w-full flex justify-end mt-8'>
            <button onClick={viewResult} disabled = {choices.length < 2} style={choices.length < 2 ? {opacity: '0.4'} : {}} className='sm:mb-2 sm:text-[.8rem] sm:p-2 sm:pr-4 sm:pl-4 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black'>Get Decision</button>
        </div>
      }

      {
        modal ? <Modal formFor = {formType} onClick = {closeModal} /> : ''
      }
    </main>
  )
}