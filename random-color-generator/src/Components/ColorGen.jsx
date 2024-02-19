import React from 'react';
import "./style.css"
export default function ColorGenerator(){
    const[colorType,setColorType]=React.useState('HEX');
    const[color,setColor]=React.useState(null);
    const ColorGenerator=(typeOfColor)=>{
        if(colorType=='HEX'){
            const char='0123456789ABCDEF';
            let hexColor='#';
        for(let i=0;i<6;i++){
            const randomIndex=Math.floor(Math.random()*16);
            hexColor+=char[randomIndex];
            setColor(hexColor);
        }
    }
    else if(colorType=='RGB'){
        let rgb=`rgb(`;
        for(let i=5;i<=7;i++){
            const random=Math.floor(Math.random()*256)
            rgb += `${random},`;
        }
        rgb = rgb.slice(0, -1) + ')'; 
        setColor(rgb)
    }
 }
//  const colorSetter=(color)=>{
//     setColorType(color);
    
//  }

    return(
        <div className="mainContainer" style={{background:color}}>
            <button onClick={()=>setColorType('HEX')}>Create HEX Color</button>
            <button onClick={()=>setColorType('RGB')}>Create RGB Color</button>
            <button onClick={()=>ColorGenerator(colorType)}>Generate Random Color</button>
            <div className="color">{color}</div>
        </div>
    )
}