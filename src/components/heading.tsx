import {useState} from 'react';


  
const Heading = () => {

    const [user] = useState({firstName: 'Sam'})
    
    return(
        <div className="flex justify-between mb-12 items-center sm:items-start">
            <div>
                <h1 className='font-bold text-[2rem]'>PickYou</h1>
                <p className='text-deepGrey'>Make the best decisions for you.</p>
            </div>
            <p>{`Hi, ${user.firstName}`}</p>
        </div>
    )
}

export default Heading;