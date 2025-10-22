import {useState} from 'react'

interface CounterProps {
    count: number,
    setCount: (count: number) => void,

    value: number,
    setValue: (value: number) => void,

    increment: (incrementValue: number) => void,

    decrement: (decrementValue: number) => void,

    reset: () => void,
}

function useCounterProps(): CounterProps {
    const [count, setCount] = useState<number>(0);

    const [value, setValue] = useState<number>(1);

    const increment = (incrementValue: number) => setCount((count) => count + incrementValue);
    const decrement = (decrementValue: number) => setCount((count) => count - decrementValue);

    const reset = () => setCount(0);

    return {
        count,
        setCount,

        value,
        setValue,

        increment,
        decrement,

        reset,
    };
}

export {CounterProps, useCounterProps};