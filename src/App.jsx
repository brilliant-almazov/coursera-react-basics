import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const [value, setValue] = useState(1);

    const increment = (incrementValue) => setCount((count) => count + incrementValue);
    const decrement = (decrementValue) => setCount((count) => count - decrementValue);

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div>
                <div style={{'fontSize': '46px'}}>
                    count value is {count}
                </div>

                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div>
                    <button onClick={() => decrement(value)}>
                        -
                    </button>

                    <input
                        type="number"
                        value={value} onChange={(i) => {
                        setValue(parseInt(i.target.value < 0 ? 1 : i.target.value));
                    }}
                        hspace={5}
                    />

                    <button onClick={() => increment(value)}>
                        +
                    </button>
                </div>
                <br/>
                <div>
                    <button onClick={() => resetCount()}>
                        reset
                    </button>
                </div>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App;