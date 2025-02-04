import React from "react";

export const Headings = ({ style, styles ,id, title, line }) => {
    const headingStyles = {
        width: "",
        ...style,
    };

    const lineStyles = {
        width: "90px",
        height: "0px",
        marginTop: "3px",
        marginLeft: "818px",
        border: "1px solid #9955FF",
        ...styles,
    };

    return (
        <>
            <h1 className="Upcoming" id={id}  style={headingStyles}>{title}</h1>
            <p className="line-bottem" style={lineStyles}>{line}</p>
        </>
    );
};
