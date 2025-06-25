import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/clients">Clients</Link>
    </nav>
  );
};

export default Navbar;
