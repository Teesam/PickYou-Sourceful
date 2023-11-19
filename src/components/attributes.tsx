interface AttributeProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    attributeName: string,
    weight: string,
    name: string
}

const Attributes:React.FC<AttributeProps> = ({ handleChange, attributeName, weight, name }) => {
    return(
        <div className='flex flex-col w-[100%]'>
            <div className='flex items-center w-full mb-2'>
                <label className='mr-2'>Name:</label>
                <input
                    type="text"
                    className='w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                    name={name}
                    autoComplete="off"
                    onChange={handleChange}
                    value = {attributeName}
                />
                <label className='mr-2'>Weight:</label>
                <input
                    type="text"
                    className='w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                    name={attributeName + ' ' + 'weight'}
                    autoComplete="off"
                    onChange={handleChange}
                    value = {weight}
                />
            </div>
        </div>
    )
}

export default Attributes;