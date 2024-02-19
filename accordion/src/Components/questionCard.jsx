import React from "react";
import data from "./data";
export default function Questions(){
  const[selected,setSelected]=React.useState();
  const[multiSelect,setMultiSelect]=React.useState(false);
  const[arrOfId,setArrOfId]=React.useState([]);
  
  function singleSelection(CurrId){
    if(selected==CurrId)  setSelected(null);
    else  setSelected(CurrId);
  }

  const multiSelection=(CurrId)=>{
    const arr=[...arrOfId];
    const indexOfCurrId=arr.indexOf(CurrId);
    if(indexOfCurrId==-1) arr.push(CurrId);
    else  arr.splice(indexOfCurrId,1);
    setArrOfId(arr)
  }
  return (
    <div className="main-container">
      <button onClick={()=>setMultiSelect(!multiSelect)}>MultipleSelection</button>
      {
        data && data.length>0?data.map((dataItem)=>(
          <>
            <div className="question">{dataItem.question}</div>
            <span onClick={multiSelect?()=>multiSelection(dataItem.id):()=>singleSelection(dataItem.id)}>+</span> 
            {
             multiSelect?arrOfId.indexOf(dataItem.id)!==-1 && (<div className="answer">{dataItem.answer}</div>
              ): selected==dataItem.id?<div className="answer">{dataItem.answer}</div>:null
              // 
            }
          </>
        )
          ):<div className="message">No data found</div>
          
      }
      
    </div>
  )
}