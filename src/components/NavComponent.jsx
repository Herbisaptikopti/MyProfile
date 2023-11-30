import vector from "../assets/img/Vector.svg";
import logo from "../assets/img/bj.svg";
const NavComponent = () => {
  return (
    <nav className="p-5 bg-ungu">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src={logo} alt="logo-img" />
          <img src={vector} alt="menu-drobdownd" />
        </div>
      </div>
    </nav>
  );
};
export default NavComponent;
