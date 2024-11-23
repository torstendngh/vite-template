import { Navigate } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";

const App = ({}) => {
  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" replace={true} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;