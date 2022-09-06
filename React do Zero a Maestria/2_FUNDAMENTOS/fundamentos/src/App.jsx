import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import Props from './components/Props';

function App() {
  const data = {titulo: 'Reaproveitando codigo', subtitulo: 'App'}
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <Props data={data}/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
