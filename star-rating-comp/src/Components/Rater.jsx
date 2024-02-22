import React from 'react';
import 'boxicons';
import './style.css'
 

export default function Rater({noOfStars=5}){
    const[ind,setInd]=React.useState(0);
    const handleClick=(index)=>{

        setInd(index+1);
    }
    return(
        <div className="main-container">
            <h1>Star rating component</h1>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    
                    // index+=1;
                    return(
                        <box-icon
                         type='solid'
                         name='star'
                         onClick={()=>handleClick(index)}
                         color={ind>index?'#ffffff':'#000000'}
                         />
                    )
                    
                })
            }
        </div>
    )
}