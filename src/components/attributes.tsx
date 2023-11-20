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
                <div className="flex sm:flex-col xl:flex-row">
                    <label className='mr-2 sm:mb-2 xl:mb-0'>Attribute Name:</label>
                    <input
                        type="text"
                        className='sm:w-[70%] xl:w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                        name={name}
                        autoComplete="off"
                        onChange={handleChange}
                        value = {attributeName}
                    />
                </div>
                <div className="flex sm:flex-col xl:flex-row">
                    <label className='mr-2 sm:mb-2 xl:mb-0'>Attribute Weight:</label>
                    <input
                        type="text"
                        className='sm:w-[70%] xl:w-[40%] mr-8 border border-deepGrey rounded-md outline-none pt-1 pb-1 pr-2 pl-2'
                        name={attributeName + ' ' + 'weight'}
                        autoComplete="off"
                        onChange={handleChange}
                        value = {weight}
                        placeholder="0 - 1"
                    />
                </div>
            </div>
        </div>
    )
}

export default Attributes;