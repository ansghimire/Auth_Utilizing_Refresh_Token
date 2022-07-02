import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './hocs/ProtectedRoute'
import Layout from "./hocs/Layout";
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard';
import NoteList from './pages/NoteList';



function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />

          {/* protected Routes */}
          <Route element= {<ProtectedRoute/>}>
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="notes" element={<NoteList/>} />
          </Route>

       </Route>
    </Routes>
  );
}

export default App;
