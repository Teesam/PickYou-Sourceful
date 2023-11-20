'use client'

import { useState, FormEvent, useEffect } from 'react';
import Attributes from './attributes';
import { useGlobalStore } from './store/contextAPI';
import { toast } from 'react-toastify';
import { isConvertibleToNumber } from './utils/convertTextToNumber';
import 'react-toastify/dist/ReactToastify.css';
import { isWithinValueRange } from './utils/checkNumberValue';

type Attribute = {
    name: string,
    weight: string
}


const Form: React.FC = () => {
  const [newAttribute, setNewAttribute] = useState<Attribute>({
    name: '',
    weight: ''
  })
  const [update, setUpdate] = useState<number>(0);
  const {  attributes, setAttributes} = useGlobalStore();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name === 'name'){
        setNewAttribute((prevData) => ({
            ...prevData,
            name: value
        }));
    }else{
        setNewAttribute((prevData) => ({
            ...prevData,
            weight: value
        }));
    }
    
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if(!isConvertibleToNumber(newAttribute.weight)){
        return toast.error('Weight must be a number!');
    }else{
        if(isWithinValueRange(newAttribute.weight, 'attribute') === 'Good'){
            let empty: boolean = false;
            let isDuplicate = false;
            if(newAttribute.name === '' || newAttribute.weight === ''){
                empty = true;
            }else{
            }
        
            for(let att of attributes){
                if(att.name.toLowerCase() === newAttribute.name.toLowerCase()){
                    isDuplicate = true;
                }
            }
        
            if(empty){
                toast.error('All values must be provided');
            }else if(isDuplicate){
                toast.error('Attribute already exists');
            }
        
            if(!empty && !isDuplicate){
                setUpdate(prev => prev + 1)
                setAttributes(prev => [...prev, newAttribute])
                clearForm();
            }
        }else{
            toast.error(isWithinValueRange(newAttribute.weight, 'attribute'));
        }
    }
   
  };

  const clearForm = (): void => {
    setNewAttribute({name: '', weight: ''});
  }

  useEffect( () => {
    // console.log(attributes);
  }, [update]);

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
        <p className='mb-2 font-bold'>Add attribute</p>
        <p>Your attributes will be weighed against your choice scores.</p>
      <br />
      <div className='flex flex-col items-start'>
        <Attributes attributeName = {newAttribute.name} weight = {newAttribute.weight} name = 'name' handleChange={handleChange} />
      </div>
      <br />
      <div className='w-full flex justify-end'>
        <button type="submit" className='pt-2 pb-2 pr-4 pl-4 text-white bg-black rounded-md hover:bg-deepGrey transition duration-300'>Add</button>
      </div>
    </form>
  );
};

export default Form;