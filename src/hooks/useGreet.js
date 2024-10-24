import React, { useState } from 'react'

const useGreet = () => {

    const [greet, setGreet] = useState("Hi, I'm Hook")


    const handleSetGreet = (data) => {
        console.log('data', data)
        setGreet(data)
    }   

    // useState
    // useEffect
   
    return [greet, handleSetGreet]
}

export default useGreet
