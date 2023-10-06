import { NavLink } from 'react-router-dom'
import lightLogo from '../../assets/images/lightLogo.svg'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4">
        <div>
          <img src={lightLogo} alt="" />
        </div>
        <div>
          <input className='min-w-[300px] max-w-[600px] bg-gray-300 opacity-50 text-black rounded-lg px-2 py-1 border-2 border-white' type="Search your destination..." />
        </div>
        <div>
          <NavLink className='mx-2 font-semibold' to='/news'>News</NavLink>
          <NavLink className='mx-2 font-semibold' to='/destination'>Destination</NavLink>
          <NavLink className='mx-2 font-semibold' to='/blog'>Blog</NavLink>
          <NavLink className='mx-2 font-semibold' to='/contact'>Contact</NavLink>
          <NavLink className='mx-2 font-semibold bg-[#F9A51A] p-2 px-4 rounded text-black border-none outline-none' to='/login'>Login</NavLink>
        </div>
    </nav>
  )
}

export default Nav
