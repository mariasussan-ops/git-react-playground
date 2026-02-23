import Header from "./components/Header"
import Incredient from "./components/Incredients"
import Data from "./data"

export default function App() {

    const travelData = Data.map((item) =>{
    return (
            <Entry 
                    key={item.id}
                    item={item}
                        
            />

    )})

    return (
        <>
        <Header/>
            <main className="container">
                {travelData}
            </main>
       

        </>
    )

}

 