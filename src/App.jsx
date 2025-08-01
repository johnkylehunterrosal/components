import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import ReactQueryWrapper from "./services/react-query/ReactQueryWrapper";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CardsPage from "./pages/CardsPage";
import SidebarPage from "./pages/SidebarPage";
import ButtonsPage from "./pages/ButtonsPage";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ReactQueryWrapper>
          <Router>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/sidebar" element={<SidebarPage />} />
                <Route path="/buttons" element={<ButtonsPage />} />
              </Route>
            </Routes>
          </Router>
        </ReactQueryWrapper>
      </Provider>
    </>
  );
};
export default App;
