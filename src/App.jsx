import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import './App.css';

function App() {
  return (
    <div className="font-MyFont">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
