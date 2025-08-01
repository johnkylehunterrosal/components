import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar1 = () => {
  const [navData, setNavData] = useState([
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Cards",
      link: "/cards",
    },
    {
      id: 3,
      title: "Sidebar",
      link: "/sidebar",
    },
  ]);
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <main>
        <section className="flex flex-col justify-around items-center mt-5">
          <div className="w-[100px] h-[100px]">
            <img
              src="/assets/images/others/logo_1.png"
              alt="Taguig Logo"
              className="h-full w-full"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-4xl text-center font-bold tracking-wider">
              Taguig Website Dashboard
            </h1>
          </div>
        </section>
        <section className="mt-5">
          <nav>
            <ul>
              {navData.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-center items-center border-2 rounded-full border-white/20 mt-2 mx-5"
                >
                  <NavBtn
                    title={item.title}
                    onClick={() => handleNavigation(item.link)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export default Sidebar1;
