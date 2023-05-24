import {Link} from "react-router-dom";
import {useLocomotiveScroll} from "react-locomotive-scroll";

const Header = () => {
	const {scroll} = useLocomotiveScroll()
	
 	const handleScroll = (target) =>{
		scroll.scrollTo(target)
	}
	
	return (
		<header className={"header"}>
			<aside className={"header-container"}>
				<div className={"header-container-logo"}><Link to={"/"} className={"color-secondary-gradient regular text-30"}>OKULUS</Link></div>
				<ul className={"header-container-menu"}>
					<li onClick={(e)=>handleScroll("#about")}><p className={"color-secondary-gradient regular text-16"}>About</p></li>
					<li onClick={(e)=>handleScroll("#about")}><p className={"color-secondary-gradient regular text-16"}>Gallery</p></li>
					<li onClick={(e)=>handleScroll("#about")}><p className={"color-secondary-gradient regular text-16"}>Contact</p></li>
				</ul>
			</aside>
		</header>
	);
};

export default Header;
