import React from 'react'


function VisibilityButton({handleClick, label}) {


    return (
        <button onClick={handleClick}>{label}</button>
    );
}






export default VisibilityButton