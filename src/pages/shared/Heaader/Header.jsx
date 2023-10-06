import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-6 mb-4">
      <img className="mx-auto" src={logo} alt="" />
      <p className="mt-4">Journalism Without Fear or Favour</p>
      <p className="text-xl mt-4">{moment().format("MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
