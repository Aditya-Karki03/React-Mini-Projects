import React from "react";
import { useState } from "react";
import data from "./data";
export default function Questions(){
    const[selected, setSelected]=useState();
    const[MultipleSelect,setMultipleSelect]=useState(false);
    const[arrOfId,setArrOfId]=useState([]);
    function handleSingleSelection(CurrId){
        selected===CurrId?setSelected(null):setSelected(CurrId);
       
    }
    function handleMultipleSelection(currId) {
        const copyArrOfId = [...arrOfId];
        const findIndexOfCurrId = copyArrOfId.indexOf(currId);
        if (findIndexOfCurrId === -1) {
          copyArrOfId.push(currId);
        } else {
          copyArrOfId.splice(findIndexOfCurrId, 1);
        }
        setArrOfId(copyArrOfId);
      }
   
    return(
      <div className="main-container">
        <button onClick={()=>MultipleSelect?setMultipleSelect(false):setMultipleSelect(true)}>Multiple Selection</button>
        {
            data && data.length>0 ?
            data.map(dataItem=><div className="item">
                <div className="title">
                    <h3>{dataItem.question}</h3>
                </div>
                <span onClick={()=>handleSingleSelection(dataItem.id)}>+</span>
                <div className="answer">
                    {   MultipleSelect?
                    handleMultipleSelection(dataItem.id):(selected===dataItem.id?<div className="answer">
                            {dataItem.answer};
                        </div>:null)
                        
                    }
                </div>
            </div>)
            :<div>No data found</div>
        }
      </div>
    )
}