import './App.css';


const Navbar = () => {
  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Schedule', path: '/schedule' },
    { text: 'Tests', path: '/tests' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a href={link.path} className="nav-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
