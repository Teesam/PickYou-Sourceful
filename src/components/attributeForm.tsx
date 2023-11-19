import { useState, FormEvent, useEffect } from 'react';
import Attributes from './attributes';
import { useGlobalStore } from './store/contextAPI';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    setUpdate(prev => prev + 1)
    setAttributes(prev => [...prev, newAttribute])
    clearForm();
  };

  const clearForm = (): void => {
    setNewAttribute({name: '', weight: ''});
  }

  useEffect( () => {
    // console.log(attributes);
  }, [update]);

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
        <p>Add attribute</p>
        <ToastContainer
                transition={Zoom}
                autoClose={4000}
                hideProgressBar
                pauseOnHover={false}
                draggable={false}
                position="top-center"
        />
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