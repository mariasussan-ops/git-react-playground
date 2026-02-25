import React from "react"



export default function App() {

    const [count, setCount]= React.useState(0);

    function addCount(){

        setCount(preCount => preCount + 1);

    }

    function subCount(){

        setCount(preCount => preCount - 1);
    }
    return(

        <main className ="container">
            <h1>This is a counter</h1>  
            <div className ="counter">
                <button onClick={addCount}>+</button>
                <h2>{count}</h2>
                <button onClick={subCount}>-</button>
            </div>
   
     
        </main>
    )
}

 