import Logo from "../assets/logo.png";

const Nav = () => {
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
        </div>
      </nav>
    </div>
  );
};

export default Nav;
