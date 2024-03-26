import { NavLink } from "react-router-dom";

const Nav = () => {2

    const navbarLists = <>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-medium hover:bg-slate-100 rounded-md text-green-500 border border-green-400' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-medium'  } to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-medium hover:bg-slate-100 rounded-md text-green-500 border border-green-400' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-medium'  } to='/listedbooks'>Listed Books</NavLink>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-medium hover:bg-slate-100 rounded-md text-green-500 border border-green-400' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-medium'  } to='/pagesread'>Pages to Read</NavLink>
    </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                navbarLists
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navbarLists
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;
