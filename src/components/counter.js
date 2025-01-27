import Click from './click';
import { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    const clicked = () => setNumber(number + 1);

    return(
        <div>
            <h1>Click Counter</h1>
            <h3>You clicked <span id="nmbr">{number}</span> time !</h3>
            <Click onClick={clicked}/>
        </div>
    )

}

export default Counter