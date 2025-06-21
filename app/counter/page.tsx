'use client'

import { useState } from "react"

export default function Counter() {
    const [x,setX] = useState(0);
    const up = () => {
        setX(x + 1 );
    }
    const down = () => {
        setX(x - 1 );
    }
    return(
    <div>
        <div>Counter Page</div>
        <div>X = {x}</div>
        <div className="flex gap-2">
            <button className="btn" onClick={up}>UP</button>
            <button className="btn" onClick={down}>DOWN</button>
        </div>
    </div>
    )
}