import logo from './logo.svg';
import './App.css';
import UserDropdown from './components/UserDropdown';
import UserPanel from './components/UserPanel';
import UserAccordion from './components/UserAccordion';
import ControlledAccordions from './components/ControlledAccordions';
import EditableAccordions from './components/EditableAccordions';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      {/* <UserDropdown /> */}
      {/* <UserPanel /> */}
      {/* <UserAccordion /> */}
      <EditableAccordions />
      <ControlledAccordions />
      <UserList />
    </div>
  );
}

export default App;
