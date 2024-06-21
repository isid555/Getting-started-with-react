import {useEffect, useState} from "react";

function Effect() {
    const [count1 ,setCount1] = useState(0);
    const [count2 ,setCount2] = useState(0);

    console.log("rendered");


    useEffect(() => {
        console.log("Mounted")
    }, []);
    return(
        <div>
            <button onClick={()=>setCount1(count1+1)}>Count 1</button>
            <p>{count1}</p>

            <button onClick={()=>setCount2(count2+1)}>Count 2</button>
            <p>{count2}</p>
        </div>
    )
}

export default Effect;