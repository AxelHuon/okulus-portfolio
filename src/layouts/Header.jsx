import {useRef} from "react";
import {Expo} from "gsap/gsap-core";
import gsap from "gsap"
import {Link} from "react-router-dom";

const Header = () => {
	
	
 
	
	return (
		<header className={"header"}>
			<aside className={"header-container"}>
				<div className={"header-container-logo"}><Link to={"/"} className={"color-secondary-gradient regular text-30"}>OKULUS</Link></div>
			</aside>
		</header>
	);
};

export default Header;
