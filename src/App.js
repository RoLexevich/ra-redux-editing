import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';
import { useSelector } from 'react-redux';

function App() {
  const editIsVisible = useSelector(state => state.serviceEdit.editMode);

  return (
    <div className="App">
      {editIsVisible ? <ServiceEdit /> : <ServiceAdd />}
      <ServiceList />
    </div>
  );
}

export default App;
