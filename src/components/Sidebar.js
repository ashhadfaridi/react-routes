import logo from "../img/logo.svg"
import { Icon } from "./Icons"
import Menu from "../components/SideBar/Menu"
import Playlists from "../components/SideBar/Playlists"
import DownloadApp from "../components/SideBar/DownloadApp"
import {useSelector} from "react-redux";
import SidebarCover from "./SideBar/SidebarCover";

function Sidebar() {

	const sidebar = useSelector(state => state.player.sidebar)

	return (
		<aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">

			<a href="#" className="mb-5 px-8">
				<img src={logo} alt="Muwic"style={{ height: 100, width: 1136 }}/>
			</a>

			<Menu />

			<nav className="mt-6">
				<ul>
					<li>
						<a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
							<span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
								<Icon name="plus" size={12} />
							</span>
							Build Your Own Playlist
						</a>
					</li>
					<li>
						<a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
							<span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
								<Icon name="heartFilled" size={12} />
							</span>
							Liked Songs
						</a>
					</li>
				</ul>
			</nav>

			<Playlists />

			<DownloadApp />

			{sidebar && <SidebarCover />}

		</aside>
	)
}

export default Sidebar
