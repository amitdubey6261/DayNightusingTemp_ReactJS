import React, { Component } from 'react'
import "../css/BoxStyle.css"
import { Button } from './Button'
import ImageBox from './ImageBox'
import mysun from "../Images/sun.png"
import mymoon from "../Images/moon.png"

export class Box extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        val : 0 , 
        image : mymoon, 
        bgcol : "grey" , 
      }
    }

    incerement = () =>{
        this.setState({
            val : this.state.val + 1 , 
      })  
      this.checkToChangeImage();
    }

    dcerement = () =>{
      this.setState({
        val : this.state.val - 1 , 
      })  
      this.checkToChangeImage();
    }

    checkToChangeImage = () => {
        if(this.state.val > 12){
            this.setState({
                image:mysun,
            })
            setTimeout(() => {
                this.setState({
                    bgcol:"orange"
                })
            }, 500);
        }
         
        if(this.state.val <= 12){
            this.setState({
                image:mymoon,
            })
            setTimeout(() => {
                this.setState({
                    bgcol:"grey"
                })
            }, 500);
        }
    }

  render() {
    return (
      <>
        <div className='Box-div'>
            <div className='pok'>
                <ImageBox value={this.state.val} bgcol={this.state.bgcol}  img={this.state.image}/>
                <Button func={this.incerement} name="INCREMENT" />
                <Button func={this.dcerement} name="DECREMENT"/>
            </div>
        </div>
      </>
    )
  }
}

export default Box