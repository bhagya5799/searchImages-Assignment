import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiMap } from 'react-icons/bi'
import './index.css'

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const Home = (props) => {
  const [data, setData] = useState([]);
  const [FilterdImages, setFilteredImages] = useState(data)

  const submitHandler = async () => {
    
  }
  const logoutbtn = () => {
    localStorage.removeItem("id")
    const { history } = props
    history.replace('/login')
  }
  
  return (
    <div className='container'>
      <div>
        <nav>
          <div className='nav'>
            <h1 className='logo-name'>MAP<span className='up'>UP</span></h1>
            <div>
              <Link to="/login"> <button className='button'>Login</button></Link>
              <Link to="/profile"> <button className='button'>Profile</button></Link>
            </div>
            {/* <button onClick={logoutbtn} >Logout</button> */}
          </div>
        </nav>
      </div>
       
        <div className='center-body'>
        <div className='side-bar'>
          <div class="sidebar">
            <Link to="/"> <p> <i><AiFillHome /></i>  Home</p></Link>
            <Link to="/profile"> <p> <i><CgProfile /></i> Profile</p></Link>
      
            <Link to="/maps"> <p> <i><BiMap /></i> maps</p></Link>
          </div>
        </div>
        <div className='map-card'>
          {/* <Maps/> */}
          
        </div>
        </div>
     
        {/* <button onClick={logoutbtn}>Logout</button> */}
    </div>
  )
}
export default Home