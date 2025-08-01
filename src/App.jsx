import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo1 from './components/Demo1'
import Class_component from './components/class_component_demo'
import StateManager from './components/StateManager'
import Counter from './components/counter'
import LifeCycle from './components/LifeCycleA'
function App() {
  const [count, setCount] = useState(0)
  //first letter of component when importing should be capital
  //props are immutable data ( cannot be changed)
  //class component = this.props is compulsory
  var sem = 5;
  return (
    <> 
      {/*<Demo1 dept="CSE" inst="CSPIT"/>
      <button>CLICK ME</button>
      <Class_component uni="CHARUSAT" semester={sem}/>
      <Demo1><button>CLICK ME</button></Demo1>
      <StateManager/>
      <Counter/>*/}
      <LifeCycle/>
    </>
  )
}

export default App
