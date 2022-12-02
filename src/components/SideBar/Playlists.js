function Playlists() {
	var data = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{data.map((number) => (<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						{number}.Demo Music
					</a>
				</li>))}
			</ul>
		</nav>
	)
}

export default Playlists