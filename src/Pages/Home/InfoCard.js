import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        // <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'><img className='mt-2' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;