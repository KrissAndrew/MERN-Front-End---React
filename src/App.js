import { Route, Routes, Navigate } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/pages/Users";

const App = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
