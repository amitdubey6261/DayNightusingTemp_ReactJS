import React from 'react'
import "../css/ImageBox.css"

const ImageBox = (props) => {
    console.log(props);
    return (
        <div className='imgbox' style={{
            backgroundColor: `${props.bgcol}`,
            backgroundImage: `url(${props.img})`,
            backgroundSize: "50vh"
            , backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div style={{backgroundColor:`${props.bgcol}` , fontSize:"7vh" , marginTop:"1vh" , marginLeft:"15vw" ,color:"rgb(255,0,0)" , opacity:"0.5"}} className="text">
                <center>{props.value}<sup>°c</sup></center>
            </div>
        </div>
    )
}

export default ImageBox 