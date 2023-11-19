import { useState, FormEvent, useEffect } from 'react';
import { useGlobalStore } from './store/contextAPI';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Attribute = {
    name: string,
    weight: string
}


const ChoiceForm: React.FC = () => {
  const [update, setUpdate] = useState<number>(0);
  const {  attributes} = useGlobalStore();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUpdate(prev => prev + 1)

    clearForm();
  };

  const clearForm = (): void => {

  }

  useEffect( () => {
    // console.log(attributes);
  }, [update]);

  return (
    <form onSubmit={handleSubmit} className='mt-4 h-[60%]'>
        <p>Add choices</p>
        <ToastContainer
            transition={Zoom}
            autoClose={4000}
            hideProgressBar
            pauseOnHover={false}
            draggable={false}
            position="top-center"
        />
        <br />
        <div className='w-fulls'>
            <label className='font-bold'>Title:</label>
            <input
                type="text"
                className='w-full mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
            
                autoComplete="off"
                onChange={handleChange}
                
            />
        </div>
        
            <div className='mt-6 h-[40vh]'>
                <p className='mb-4 font-bold'>Attributes scoring:</p>
                <div className='flex flex-col items-start w-full h-[80%] sm:overflow-y-auto'>
                    {
                        attributes.map((item, i) => {
                            return <div className='mb-2' key={i}>
                                        <p>{item.name}</p>
                                        <input
                                            type="text"
                                            className='w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                                    
                                            autoComplete="off"
                                            onChange={handleChange}
                                        
                                        />
                                    </div>
                        })
                    }
                </div>
            </div>
        <div className='w-full flex justify-end h-[10%]'>
            <button type="submit" className='pt-2 pb-2 pr-4 pl-4 text-white bg-black rounded-md hover:bg-deepGrey transition duration-300'>Add</button>
        </div>
    </form>
  );
};

export default ChoiceForm;