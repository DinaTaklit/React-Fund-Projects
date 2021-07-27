import React, { useState, useEffect } from 'react'
import './index.css'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

export default function ToursApp() {
    const [isLoading, setIsLoading] = useState(true)
    const [tours, setTours] = useState([])

    const getData = async() => {
        try{
            const data = await fetch(url).then(response=>response.json())
            setTours(data)
            setIsLoading(false)
        }
        catch(error){
            console.log(error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !==id)
        setTours(newTours)
    }
    
    if (isLoading){
        return (
            <main>
                {isLoading && <Loading/>}
            </main>
        )
    }
    if(tours.length===0){
        return (
            <main>
                <div className="title">
                    <h2> no tours left</h2>
                    <button className="btn" onClick={getData}>Refrech</button>
                </div>
            </main>
        )
    }   
    return (
        <main>
            <section>
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="underline"></div>
                </div>
                <div>
                    <Tours tours={tours}  removeTour={removeTour}/>
                </div>
  
            </section>
        </main>
    )  
}
