import React, { useEffect, useState } from 'react';
import './Tooltip.css';

const Tooltip = (props: any) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [text, setText] = useState(props.text)
    useEffect(() => { setText(props.text) }, [props.text])
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <>
            <div className="tooltip-containers" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {props.children}
                {text ? <>
                    {showTooltip && <div className="tooltips">{props.text}</div>}
                </> : <></>}

            </div>
        </>

    );
};

export default Tooltip;
