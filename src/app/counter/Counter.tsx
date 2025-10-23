import './Counter.css'

import {A, Target as ATarget} from '../../components/A';

import {Img} from '../../components/Img';
import {Button} from '../../components/Button';
import {useCounterProps} from './CounterProps';


export function Counter() {
    const props = useCounterProps();

    return (
        <>
            <div>
                <div style={{'fontSize': '46px'}}>
                    count value is {props.count}
                </div>

                <A href={'https://vite.dev'} target={ATarget.BLANK}>
                    <Img src={'/img/vite.svg'} className={'logo'} alt={'Vite logo'}/>
                </A>
                <A href={'https://react.dev'} target={ATarget.BLANK}>
                    <Img src="/img/react.svg" className="logo react" alt="React logo"/>
                </A>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div>
                    <Button onClick={() => props.decrement(props.value)}>-</Button>

                    <input
                        type="number"
                        value={props.value}
                        onChange={(i) => props.setValue(parseInt(i.target.value) < 0 ? 1 : parseInt(i.target.value))}
                        className="main_input"
                    />

                    <Button onClick={() => props.increment(props.value)}>+</Button>
                </div>
                <br/>
                <div>
                    <Button onClick={() => props.reset()}>reset</Button>
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