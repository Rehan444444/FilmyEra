import React from 'react'
// import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='text-red-500 flex justify-between items-center p-4 text-3xl font-bold' >
     <span>Filmy <span className='text-white'>Era</span></span>
    
  <Link to={'/AddMovie'}><span> <button className='text-xl text-white bg-blue-700 hover:bg-purple-900 active:bg-purple-500 p-2 rounded-xl'>Sign-Up/Login</button></span></Link>
    </div>
    <hr />
    </>
  )
}

export default Header;
