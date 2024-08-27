import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import UserProtectedRoute from "routes/userProtectedRoute";
import Header from "components/header/Header";
import Home from "pages/home";
import Register from "pages/register";
import WatchList from "pages/watchList";
function App() {
  return (
    <div className="fullWidth">
      <BrowserRouter>
        <Header />
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/watchList"
              element={
                <UserProtectedRoute>
                  <WatchList />
                </UserProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
