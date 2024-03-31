import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleCLick =()=>{
      setOpen(!open)
    }

  return (
    <nav className="navbar">
      <div className="container">

        <Link to="/" className="navbar-logo">
          <img src="https://placehold.co/600x400" alt="Ecommerce Logo" />
        </Link>


        <ul className= {open ? "collapse-active navbar-links " :"navbar-links"}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">Shop</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>


        <div className="navbar-actions">
          <Link to="/cart" className="navbar-cart">
          <ShoppingCartOutlinedIcon sx={{color :"#4bcffa"}}/>
          </Link>
          <Link to="/account" className="navbar-account">
           <AccountCircleOutlinedIcon sx={{color :"#4bcffa"}}/>
          </Link>
          <button onClick={handleCLick} className='navbar-toggle'>
            {
                open ? <MenuOpenOutlinedIcon sx={{color :"#333333"}}/> : <MenuOutlinedIcon sx={{color :"#333333"}}/>
            }
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
