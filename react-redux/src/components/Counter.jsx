/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import Button from './Button';
import Count from './Count';

function Counter({count, onIncrement, onDecrement}) {
  return (
    <div className='counter'>
        <Count count={count}/>
        <div className="buttonDiv">
            <Button handler={onIncrement}>Increment</Button>
            <Button handler={onDecrement}>Decrement</Button>
        </div>
    </div>
  )
}

export default Counter