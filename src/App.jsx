import './App.css'
import React, { useState } from 'react'
import Error from './assets/Error'
import Input from './assets/Input'
import Button from './assets/Button'
import Switch from './assets/Switch'

function App() {
return (
  <div className = "nimiApp">
<Switch />
<Input label="Value A"/>
<Input label="Value B"/>
<Button label="Calculate"/>
<Button label="Clear"/>
<Error message="ХА,Ошибка"/>
  </div>
)
}
export default App
import React,{useState} from 'react'

function App() {
const [valueA, setValueA] = useState('')
const [valueB, setValueB] = useState('')
const [useType1Formula, setUseType1Formula] = useState(true)
const [error, setError] = useState('')

const handleCalculator = () => {}
const handleClear = () => {}
setValueA
setValueB
setError
}
return(
<div>
<Switch useType1Formula={useType1Formula} setUseType1Formula={setUseType1Formula}/>
<Input label="Value A" value={valueA} onChange={(e) => setValueA(e.target.velue)}/>
<Input label="Value B" value={valueA} onChange={(e) => setValueB(e.target.velue)}/>
<Button label='Calculate' onClick={handleCalculate}/>
<Button label='Clear' onClick={handleClear}/>
{error ? <Error message={error} /> : null}

</div>
)
const handleCalculate = () => {
let result;
if (useType1Formula){
  result = parseFloat(valueA) + parseFloat(valueB)
} else {
  result = parseFloat(valueA) * parseFloat(ValueB)
}
setError('')
}