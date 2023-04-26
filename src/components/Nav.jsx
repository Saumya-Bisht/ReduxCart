
import './Nav.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
// import Login from './Login';



function Nav(props) {
    const Cart=useSelector((state)=> state.cart)
     console.log(Cart);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        
        <Link to="/products">Products</Link>
        <Link to="/urf">useRef</Link>
        <Link to="/cart">Cart <span>{Cart.length}</span> </Link>
        <button style={{color:"white",backgroundColor:"green",border:"0",height:"25px",width:"100px",cursor:"pointer"}}>
          Logout
        </button>
        <span  style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
          Welcome! 
        
        </span>
      </div>
    </div>
  );
}

export default Nav;