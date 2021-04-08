import React from 'react';
const WorkerOrSeller = (props) => {
    return (
        <div className="s-w-one" onClick={props.press}>
            <div className="sw-2">
                <i class={props.icon}></i>
                <div>
                    <strong>{props.name}</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore velit est facilis repellendus odio veniam modi, temporibus nulla delectus reiciendis!</p>
                </div>
            </div>
        </div>
    )
}

export default WorkerOrSeller;