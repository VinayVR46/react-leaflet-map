import { useState } from 'react';
import './App.css';
import Maps from './components/Maps'
import Search from './components/Search'
function App() {
  const [selectPosition, setSelectPosition] = useState(null)
  return (
    <div className="App"
     style={{border: "2px solid red", display:'flex', flexDirection: 'row', width: '100vw', height:'100vh' }}>
      <div style={{ width: '50vw'}}>
      <Maps selectPosition={selectPosition}/>
      </div>
      <div style={{ width:'50vw', flexDirection:'column'}}>
      <Search selectPosition = {selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
  );
}

export default App;
