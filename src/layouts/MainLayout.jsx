import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen mt-5 mx-5">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
