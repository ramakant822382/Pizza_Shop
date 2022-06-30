import './App.css'
import React from 'react'
import { BrowserRouter as Router ,Link,Route } from 'react-router-dom'
function Dyn(){
    let users =[
        {id:1,name:"golu",email:'ramakantsharma345@gmail.com'},
        {id:2,name:"kajal",email:'ramakantsharma3455@gmail.com'},
        {id:3,name:"mahi",email:'ramakantsharma343@gmail.com'},
        {id:4,name:"pooja",email:'ramakantsharma3433@gmail.com'},
        {id:5,name:"rahul",email:'ramakantsharma342@gmail.com'},
        {id:6,name:"vina",email:'ramakantsharma324@gmail.com'},
        {id:7,name:"rama",email:'ramakantsharma3224@gmail.com'},
        {id:8,name:"avi",email:'ramakantsharma32224@gmail.com'},
    ]
    return (

        <div>
          
                <h1>Dynamic Route</h1>
           
        </div>
    )
}
export default Dyn;