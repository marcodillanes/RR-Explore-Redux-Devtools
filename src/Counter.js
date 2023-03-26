import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Plus 1</button>
        <button onClick={() => dispatch(decrement())}>Minus 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Plus 5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>Minus 5</button>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Counter
