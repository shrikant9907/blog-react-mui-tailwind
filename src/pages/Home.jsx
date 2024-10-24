import React from 'react'
import CustomAccordion from '../components/CustomAccordion'
import useGreet from '../hooks/useGreet'

const Home = () => {

  const [hookData, setHookData] = useGreet();
 
  console.log('hookData', hookData)
  
  return (
    <div>
      <button className='px-4 border' onClick={() => setHookData("This is updated data")}>Say Bye</button>
      {hookData}
        {/* <CustomAccordion /> */}
    </div>
  )
}

export default Home
