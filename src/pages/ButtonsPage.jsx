import NavBtn1 from "../components/button/NavBtn1";
import LogoutBtn1 from "../components/button/LogoutBtn1";
const ButtonsPage = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-5xl">Button components</h1>
      <section className="mt-5">
        NavBtn1
        <NavBtn1 title="Button 1" onClick={console.log("Clicked")} />
      </section>
      <section className="mt-5">
        LogoutBtn1
        <LogoutBtn1 />
      </section>
    </>
  );
};

export default ButtonsPage;
