import React from 'react';

const ButtonComponent = (props)=>{
    return(
        <div onClick ={props.fun} className="ui animated fade button" style={{marginTop:'10px'}}>
                    <div className="visible content">{props.content}</div>
                    <div className="hidden content">
                        <i className = {props.cname} ></i>
                    </div>
                    </div>
    )
};

export default ButtonComponent;