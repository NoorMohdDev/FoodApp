import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/index.jsx'

function Navbar() {
  const {searchParam, setSearchParam, handleSubmit}= useContext(GlobalContext)

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 '>
      <NavLink to={"/"}>
        <h2 className="text-2xl font-semibold text-green-600">Search Food Recipe</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-green-100/75 p-3 px-8 rounded-xl 
          outline-none border lg:w-96 shadow-lg shadow-green-100 focus:shadow-green"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-green-600 hover:text-green-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-green-600 hover:text-green-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar