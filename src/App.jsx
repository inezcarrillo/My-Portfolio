import { Outlet } from 'react-router-dom';
import Nav from './assets/NavTabs';
import './App.css';


function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}
  
  export default App;