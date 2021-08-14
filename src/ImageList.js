import React from 'react';

const ImageList = (props)=>{
    const images = props.images.map((image)=>{
        return(
            <a key = {image.id} className="ui card" href = {image.urls.regular} target="_blank" style={{height:'300px',backgroundImage:`url('${image.urls.small}')`,backgroundSize:'cover'}}>
                {/* <a href={image.urls.regular} target="_blank" className="ui image">
                    <div key ={image.id} style={{,height:'100%',width:'100%'}} />
                </a>  */}
            </a>
            
        )
    });

    return (
        <div className="ui container" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',alignItems:'baseline'}}>
            {images}
        </div>
    );
    
};

export default ImageList;