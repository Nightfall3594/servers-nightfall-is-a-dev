import {Routes, Route} from "react-router-dom";
import UserDashboard from "./pages/UserDashboard.tsx";
import Sidebar from "./components/common/Sidebar/Sidebar.tsx";
import Console from "./pages/Console.tsx";

function App() {

  const mockUser = {
    id: '1',
    name: 'HelloWorld',
    email: 'Apple@apple.com'
  }

  return (
    <>
      <Sidebar currentUser={mockUser} />

      <Routes>
        <Route path="/" element={ <UserDashboard /> } />
          <Route path="/console" element={ <Console /> } />
      </Routes>
    </>
  )
}

export default App;
