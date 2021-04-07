import React from 'react';
const AdminMenuItem = (props) => {
    return (
        <div className="adminMenuItem">
            <i class={props.icon}></i>
            <span style={{color: 'black'}}>{props.name}</span>
        </div>
    )
}

export default AdminMenuItem;