import { NavLink } from 'react-router-dom';

const defaultNavStyles = 'w-full flex font-light text-sm items-center gap-3  hover:bg-purple-500/75 transition duration-200 hover:cursor-pointer  text-left py-3 px-4 rounded-lg'
const currentNavStyles = 'bg-purple-500/75 text-white rounded-lg'
const defaultLinkStyles = 'text-white/50 hover:text-white'

export default function Navbar() {
  return (
    <div className="min-w-[310px] bg-black text-white text-left px-8 py-12 relative">
      <h1 className="text-3xl font-extrabold mb-6 flex items-center gap-2 w-fit">
        MyMovieList
        <span className="material-icons text-purple-500 !text-3xl">
          movie
        </span>
      </h1>
      <div className="flex flex-col gap-1">
        <div className='flex items-center gap-3 w-full hover:border-purple-300/80 focus:border-purple-300/80 duration-200 transition px-4 py-3 placeholder:text-[#343434] text-white outline-none border border-[#343434] rounded-lg mb-4'>
          <span className="material-icons text-[#343434] hover:text-white duration-200 transition cursor-pointer">
            search
          </span>
          <input type="text" placeholder="Search" className="text-sm placeholder:text-[#343434] outline-none" />
        </div>
        <NavLink to="/" className={({ isActive }) => isActive ? currentNavStyles : defaultLinkStyles} end>
          <button className={defaultNavStyles}>
            <span className="material-icons">
              trending_up
            </span>
            Popular
          </button>
        </NavLink>

        <NavLink to="/top-rated" className={({ isActive }) => isActive ? currentNavStyles : defaultLinkStyles} end>
          <button className={defaultNavStyles}>
            <span className="material-icons">
              star
            </span>
            Top Rated
          </button>
        </NavLink>

        <NavLink to="/upcoming" className={({ isActive }) => isActive ? currentNavStyles : defaultLinkStyles} end>
          <button className={defaultNavStyles}>
            <span className="material-icons">
              schedule
            </span>
            Upcoming
          </button>
        </NavLink>

        <NavLink to="/library" className={({ isActive }) => isActive ? currentNavStyles : `${defaultLinkStyles} pointer-events-none opacity-50`} end>
          <button className={defaultNavStyles}>
            <span className="material-icons">
              collections_bookmark
            </span>
            Watchlist
          </button>
        </NavLink>
      </div>
      <div className='absolute bottom-0 w-full left-0 px-8 py-8'>
        <NavLink to="/settings" className={({ isActive }) => isActive ? `${currentNavStyles} block` : defaultLinkStyles} end>
          <button className={defaultNavStyles}>
            <span className="material-icons">
              account_circle
            </span>
            User
          </button>
        </NavLink>
      </div>
    </div>
  );
}
