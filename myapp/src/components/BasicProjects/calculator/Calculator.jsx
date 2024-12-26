import React, { useRef } from 'react'


const Calculator = () => {

    let inputs = useRef()

    let getValue = e => inputs.current.value += e.target.innerText

    let res = _ => inputs.current.value = eval(inputs.current.value)

    let clear = _ => inputs.current.value = ""

  return (
    <>
        <div className="calculator">
            <div className="header">Calculator</div>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}><input type="text" placeholder='00.0' ref={inputs}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} onClick={clear}>CE</td>
                            <td onClick={getValue}>/</td>
                            <td onClick={getValue}>*</td>
                        </tr>
                        <tr>
                            <td onClick={getValue}>7</td>
                            <td onClick={getValue}>8</td>
                            <td onClick={getValue}>9</td>
                            <td onClick={res}>=</td>
                        </tr>
                        <tr>
                            <td onClick={getValue}>4</td>
                            <td onClick={getValue}>5</td>
                            <td onClick={getValue}>6</td>
                            <td onClick={getValue}>-</td>
                        </tr>
                        <tr>
                            <td onClick={getValue}>1</td>
                            <td onClick={getValue}>2</td>
                            <td onClick={getValue}>3</td>
                            <td rowSpan={2} onClick={getValue}>+</td>
                        </tr>
                        <tr>
                            <td onClick={getValue}>.</td>
                            <td onClick={getValue}>0</td>
                            <td onClick={getValue}>%</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Calculator