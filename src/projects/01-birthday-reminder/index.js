import React, {useState} from 'react'
import {data} from './data'
import './index.scss'
import List from './List'

export default function IndexBirthday() {
    const [people, setPeople] = useState(data)
    return (
        <div className="birthday-reminder">
            <h2 style={{textAlign:"center", margin:"2rem auto 1rem", color:"whitesmoke"}}>Birthday Reminder</h2>
            <main>
                <section className="container">
                    <h3>{people.length} birthday today</h3>
                    <List people={people}/>
                    <button onClick={() => setPeople([])}>Clear All</button>
                </section>
            </main>
        </div>
    )
}
