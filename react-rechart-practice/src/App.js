
import './App.css';
import MyLineCharts from './components/MyLineCharts/MyLineCharts';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <animated.div style={props}><h1>I will fade in</h1></animated.div>
      <MyLineCharts></MyLineCharts>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
