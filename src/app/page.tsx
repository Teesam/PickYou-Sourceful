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

  console.log(formType)

  return (
    <main className="relative bg-myWhite min-h-screen max-w-screen w-screen p-10">
      <Heading/>
      <TopNav setFormType = {setFormType} onClick={addNewAttribute}  passNavToProp = {currentNavItem} />
      {
        currentNav === 'Current Decision' ? <Upcoming /> : ''
      }

      {
        modal ? <Modal formFor = {formType} onClick = {closeModal} /> : ''
      }
    </main>
  )
}