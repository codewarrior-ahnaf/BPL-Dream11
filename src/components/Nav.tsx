import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";


const Nav = ({ coin }: {coin: number}) => {
  


  return (
    <div>
      <nav>
        <div className="flex justify-between container mx-auto">
          <img src={Logo} alt="" />

          <ul className="flex gap-4 items-center">
            <li>Home</li>
            <li>Fixture</li>
            <li>Players</li>
            <li>schedule</li>
          </ul>

          <h2 className="font-bold text-3xl text-black flex gap-1 items-center"><AiFillDollarCircle></AiFillDollarCircle>{coin}</h2>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
