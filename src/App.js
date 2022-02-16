import { Route, Routes, Navigate } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import Users from "./users/pages/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/places/new" element={<NewPlace />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
