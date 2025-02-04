import React from "react";
import "./HomePage.css";

export const Custemer = ({ id , img , name , img2 , pera }) => {
    return (
        <div className="custemer" id={id}>
            {img && <img src={img} alt="Customer" className="custemer-1" />}
            {img && <img src={img2} alt="rect" className="rectengle" />}
             <div  className="side-box">
                <h1 className="name-custemer">{name}</h1>
             </div>
             <p className="pera-custemer">{pera}</p>
        </div>
    );
};
