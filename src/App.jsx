import Header from "./components/Header"
import Ingredient from "./components/Ingredients"
import Data from "./data"

export default function App() {

    const travelData = Data.map((item) =>{
    return (
            <Ingredient
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

 