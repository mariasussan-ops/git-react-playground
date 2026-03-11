import React from "react"



export default function App() {



    function signUp(formData){
/*
        const email     =   formData.get("emailId");
        const password  =   formData.get("password");
        const aboutMe   =   formData.get("aboutMe");
        const gender    =   formData.get("gender");
        const skills    =   formData.getAll("skills");
        const favColor  =   formData.get("favColor");
*/

        const dataObject    = Object.fromEntries(formData);
        const skills        = formData.getAll("skills");

        const allData       = { ...dataObject,skills};
        
        console.log(allData);
    }
    return(

        <section>
            <form action={signUp}>

                <h1>Sign Up Form</h1>
                <label>
                  Email <input type="email" id="emailId" name="emailId"/>
                </label><br/>
                <label>
                   Password <input type="password" id="password" name="password"/>
                </label><br/>
                <label>
                   About Me<br/>
                <textarea id="aboutMe" name="aboutMe"></textarea>
                </label><br/>
                <fieldset>
                    <legend>Gender</legend>
                 <label>
                    <input type="radio" name="gender" value="Male"/>Male
                </label>
                <label>
                    <input type="radio" name="gender" value="Female"/>Female
                </label>
                </fieldset>
                <fieldset>
                    <legend>Skills</legend>
                 <label>
                    <input type="checkbox" name="skills" value="HTML" />HTML
                </label>
                <label>
                    <input type="checkbox" name="skills" value="CSS"/>CSS
                </label>
                <label>
                    <input type="checkbox" name="skills" value="React"/>React
                </label>
                </fieldset>   
                <label>
                 Favorite colour   <select id="favColor" name="favColor" >
                        <option value="" ></option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>

        </section>
    )
}

 