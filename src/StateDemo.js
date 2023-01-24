import { useState } from "react";

function StateDemo(){

    const [tick, setTick] = useState(0)

    function subHandler() {
        if(tick > 0) {
            setTick(tick - 1)
        }
    }

    return(
    <div>
        <h1>Count: {tick}</h1>
        <button onClick={() => setTick(tick + 1)}>Add</button>
        <button onClick={subHandler} >
            Subtract</button>
    </div>
    )
}

export default StateDemo