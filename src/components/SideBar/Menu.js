import { Icon } from "../Icons";
import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav className="px-2">
			<ul className="flex flex-col">
				<li>
					<NavLink activeClassName="bg-active text-white" exact to={"/"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">

						Home page
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="bg-active text-white" to={"/search"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
						Search
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="bg-active text-white" to={"/collection"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">

						Your Library
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Menu