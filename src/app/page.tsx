"use client"

import {useState} from 'react';
import Heading from '@/components/heading';
import TopNav from '@/components/topNav';
import Modal from '@/components/modal';
import Upcoming from '@/components/upcoming';
import { useGlobalStore } from '@/components/store/contextAPI';

type Attribute = {
  score: string,
  weight: string
}

interface FormData {
title: string;
calories: Attribute,
  cost: Attribute,
  protein: Attribute,
  taste: Attribute
}

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [currentNav, setCurrentNav] = useState<string>('Current Decision');
  const [formType, setFormType] = useState<string>('');
  const addNewAttribute = (): void => {
    setModal(true);
  }
  const { choices, setChoices } = useGlobalStore();

  const closeModal = (): void => {
    setModal(false);
  }

  const clearChoices = () => {
    setChoices([]);
  }

  const currentNavItem = (data: string) => {
    setCurrentNav(data);
  }

  return (
    <main className="bg-myWhite min-h-screen max-w-screen p-10 overflow-x-hidden pb-16">
      <Heading/>
      <TopNav setFormType = {setFormType} onClick={addNewAttribute}  passNavToProp = {currentNavItem} />
      {
        currentNav === 'Current Decision' ? <Upcoming /> : ''
      }

      {
        choices.length < 1 ? '' : 
        <div className='w-full flex justify-end mt-8'>
          <button className='sm:mb-2 sm:text-[.8rem] sm:p-1 text-myWhite xl:p-4 rounded-md cursor-pointer bg-black'>Get Decision</button>
        </div>
      }

      {
        modal ? <Modal formFor = {formType} onClick = {closeModal} /> : ''
      }
    </main>
  )
}