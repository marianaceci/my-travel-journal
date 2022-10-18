import React from "react";
import data from "./data";
import Card from "./Card";
import Navbar from "./Navbar";


function App(){    
    const cards = data.map(item => {
        return (
            <Card 
                key={item.title}
                item={item}        
            />
        )
    })
    
    
    return (
        <div className="main--container">
            <Navbar />
            <section className="main--cards">
                {cards}
            </section>
        </div>
    );
}

export default App