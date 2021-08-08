import React from 'react'
import './index.css';
import Fade from 'react-reveal/Fade';
function Wrap(props) {

    const isltext=props.btntextl;
    const isrtext=props.btntextr;


    return (

        <div style={{backgroundImage: `url(${props.imgs})`}} className="wrap">
        
            <div>
                <Fade bottom>
            <h1>{props.title}</h1>
            </Fade>
            <Fade right>
            <p>{props.para}</p>
            </Fade>
            </div>

            <Fade bottom>
            <div className="btns">
              
                    <a  style={{backgroundColor:"#3c3e42"}} href="#">{props.btntextl}</a>

                    <a  className="btn2" style={{backgroundColor:"#3c3e42"}} href="#">{props.btntextr}</a>

                
            </div>
            </Fade>

        </div>
       
    )
}
 
export default Wrap;
