import React, { useState, useEffect } from 'react'

export default function StateFunctionalComponent() {
    const [count, setCount] = useState(0)
    const [vnd, setVnd] = useState(0)
    useEffect(() => {
        setVnd(count * 25000)
    }, [count])

    // const [car, setCar] = useState({
    //     brand: "Ford",
    //     model: "Mustang",
    //     color: "red",
    //     age: 5
    // })
    // const updateCar = () => {
    //     setCar({ ...car, color: "blue" })
    // }
    return (
        <>
            <div>
                <p>Count: {count}</p>
                <p>VND: {vnd}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>

            {/* <div>StateFunctionalComponent
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <hr />
            <div>
                <h1>My {car.brand}</h1>
                {car.age != 1 ? <p>It is a {car.color} {car.model} with {car.age} years old</p> : <p>It is a {car.color} {car.model} with {car.age} year old</p>}
            </div>
            <button onClick={updateCar}>Update Car Color</button> */}
        </>



    )

}
