import React,{useState,useEffect, useCallback} from "react"
import ReactDom from "react-dom/client"

function Main(){
    [Password,setPassword] = useState("");
    [length,setLength] = useState(10);
    [isNumeric,setNumric] = useState(false);
    [isSpecialChar,setChar] = useState(false);

    const Generate_password = useCallback(()=>{
        let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
        if(isNumeric)
            str += "1234567890"
        if(isSpecialChar)
            str += "!@#$%^&*()?/;:+-_}{][\|~`"

        let pass = "";

        for(let i=0;i<length;i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    },[length,isNumeric,isSpecialChar]);

    useEffect(()=>{
        Generate_password()
    },[Generate_password])  // you can also use [length,isNumeric,isSpecialChar] in place of [Generate_password]

    return(
        <>
        <h1>PASSWORD GENERATOR</h1>
        <h2>{Password}</h2>
        <div>
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({length})</label>

            <input type="checkbox" defaultChecked = {isNumeric} onChange={()=>setNumric(!isNumeric)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked = {isSpecialChar} onChange={()=>setChar(!isSpecialChar)}></input>
            <label>Special Symbol</label>
        </div>
        </>
    )
}


const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<Main></Main>)