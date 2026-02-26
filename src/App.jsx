import React from "react"



export default function App() {

    const [isGoingOut, setIsGoingOut]= React.useState(false);


    function ansButton(){

        setIsGoingOut(prevCheck => !prevCheck);

    }
    return(

        <main className ="container">
            <h1>Is going out?</h1>  
            <div className ="counter">
                <button onClick={ansButton}>{isGoingOut? "Yes":"No"}</button>
            </div>
   
     
        </main>
    )
}

 