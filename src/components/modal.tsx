import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import AttributeForm from './attributeForm';
import ChoiceForm from './choiceForm';

interface ModalProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    formFor: string
}

const Modal: React.FC<ModalProps> = ({ onClick, formFor }) => {
    return(
        <div className="fixed top-0 left-0 right- 0 bottom-0 w-screen h-screen bg-transparentBlack flex justify-center items-center">
            <div className="sm:w-[90vw] rounded-md bg-myWhite md:w-[50rem] max-h-[80%] p-6 pb-10">
                <div className='w-full h-[1rem] flex justify-end'>
                    <button onClick={(event) => onClick(event)} className='p-0'>
                        <FontAwesomeIcon className='cursor-pointer' icon={faXmark} />
                    </button>
                </div>
                <div>
                    { formFor === 'attribute' ? <AttributeForm /> : <ChoiceForm /> }
                </div>
            </div>
        </div>
    )
}

export default Modal;