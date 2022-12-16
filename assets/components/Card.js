import React from "react";

function Card(props){
    return (
        <section className="card--container">
            <img src={props.item.imageUrl} className="card--img" />
            <div className="card--info">
                <div className="card--local">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="card--dates">
                    <span>{props.item.startDate}</span>&nbsp;-&nbsp;<span>{props.item.endDate}</span>
                </p>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </section>
    );
}

export default Card
