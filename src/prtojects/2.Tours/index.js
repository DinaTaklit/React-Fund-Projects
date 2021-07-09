import React, { useState, useEffect } from 'react'
import './index.css'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

export default function Index() {
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

    if (isLoading){
        return (
            <main>
                <section>
                {isLoading && <Loading/>}
                </section>
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
                    <Tours tours={tours}/>
                </div>
            </section>
        </main>
    )  
}
