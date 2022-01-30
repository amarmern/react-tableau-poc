import './App.css';
import Animation from './components/Animation';
import DynamicLoad from './components/DynamicLoad';
import Events from './components/Events';
import ExportPDF from './components/ExportPDF';
import Filter from './components/Filter';
import GetData from './components/GetData';
import TableauEmbed from './components/TableauEmbed';

function App() {
  return (
    <div className="App">
      <h1>Embeded Tableau</h1> 
      <ExportPDF />
    </div>
  );
}

export default App;
