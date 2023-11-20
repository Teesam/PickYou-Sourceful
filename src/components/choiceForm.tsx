import { useState, FormEvent, useEffect, useRef } from 'react';
import { useGlobalStore } from './store/contextAPI';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isConvertibleToNumber } from './utils/checkNumberValue';

type Attribute = {
    name: string,
    score: string
}

interface MyChoice {
    title: string
    attributes: Attribute[]
}

const ChoiceForm: React.FC = () => {
    const [myChoice, setMyChoice] = useState<MyChoice>({
        title: '',
        attributes: []
    });
    const [initialForm] = useState<MyChoice>({title: '', attributes: []})
  const [update, setUpdate] = useState<number>(0);
  const {choices, setChoices, attributes} = useGlobalStore();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name === 'choice title'){
        setMyChoice((prevData) => ({
            ...prevData,
            title: value
        }));
    }else{
        if(myChoice.attributes.length < 1){
            setMyChoice((prevData) => ({
                ...prevData,
                attributes: [
                    ...prevData.attributes, {
                        name: name,
                        score: value
                    }
                ]
            }));
        }else{
            const newAttributes = myChoice.attributes.filter(obj => obj.name !== name);
            setMyChoice((prevData) => ({
                ...prevData,
                attributes: [
                    ...newAttributes, {
                        name: name,
                        score: value
                    }
                ]
            }));
        }
        
    }
  };

  const checkInputValue = ():boolean => {
    let count: number = 0;
    for(let att of myChoice.attributes){
        if(isConvertibleToNumber(att.score)){
            count += 1;
        };
    }
    return count > 1 ? true : false;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let isText = checkInputValue();
    if(!isText){
        return toast.error('Attribute score must be a number!');
    }else{
        let empty: boolean = false;
        let isChoice: boolean = false;
        if(attributes.length > myChoice.attributes.length){
            return toast.error('All scores must be provided!')
        }else{
            for(let att of myChoice.attributes){
                if(att.score === ''){
                    empty = true
                }
            }
        }
    
        for(let choice of choices){
            if(choice.title.toLowerCase() === myChoice.title.toLowerCase()){
                isChoice = true;
            }
        }
    
        if(empty){
            return toast.error('All scores must be provided!')
        }else if(isChoice){
            return toast.error('Choice already exists!');
        }else if(myChoice.title === ''){
            return toast.error('Title must be provided!')
        }
    
        if(!isChoice && !empty && myChoice.title !== ''){
            setUpdate(prev => prev + 1)
            setChoices(prev => [...prev, myChoice]);
            clearForm();
        }
    }

  };

//   const inputRefs = useRef<HTMLInputElement | null>(null);

  const clearForm = (): void => {
    setMyChoice(initialForm)
    // if(inputRefs.current){
    //     inputRefs.current.forEach((inputRef) => {
    //         if (inputRef) {
    //           inputRef.value = '';
    //         }
    //       });
    // }
    
  }

  useEffect( () => {
    // console.log(choices);
  }, [update]);

  return (
    <form onSubmit={handleSubmit} className='mt-4 h-[60%]'>
        <p>Add choices</p>
        
        <br />
        <div className='w-fulls'>
            <label className='font-bold'>Title:</label>
            <input
                type="text"
                className='w-full mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                name = 'choice title'
                autoComplete="off"
                onChange={handleChange}
                value={myChoice.title}
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
                                            // ref={(el) => (inputRefs.current[index] = el)}
                                            className='w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                                            name = {item.name}
                                            autoComplete="off"
                                            onChange={handleChange}
                                            // value = {myChoice.attributes.length > 0 ? myChoice?.attributes[i]?.score : ''}
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