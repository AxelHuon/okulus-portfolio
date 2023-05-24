import {SplitChars, Tween, Reveal} from "react-gsap";
import {useEffect, useState} from "react";
import {useLocomotiveScroll} from "react-locomotive-scroll";

const HomeAbout = () => {
	
	const {scroll} = useLocomotiveScroll()
	const [playState, setPlayState] = useState("stop");
	let element = document.querySelector(".home-about");

// Définition de la fonction de vérification
	function checkClass() {
		if (element.classList.contains("is-inview")) {
			setPlayState("play")
			setTimeout(function () {
				const spans = element.querySelectorAll(".text-120 span")
				for (let i = 0; i < spans.length; i++) {
					spans[i].classList.add("hoverable")
				}
			}, 2300);
		}
	}

// Exécution de la fonction toutes les secondes
	setInterval(checkClass, 1000);
	
	const [dragDropState, setDragDropState] = useState(false);
	const [mousePosition, setMousePosition] = useState({x:0,y:0});
	const [elementToMove, setElementToMove] = useState("");
	
	useEffect(() => {
		function handleMouseMove(event) {
			setMousePosition({ x: event.clientX, y: event.clientY });
		}
		window.addEventListener('mousemove', handleMouseMove);
		
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [])
	
	
	const dragDrop = (element) => {
		scroll.scrollTo("#about")
		if (!dragDropState){
			setDragDropState(true)
			setElementToMove(element)
		}else{
			setDragDropState(false)
		}
	}
	
	useEffect(() => {
		if (dragDropState){
			console.log(`.home-about-social-item${elementToMove}`)
			let divelementToMove = document.querySelector(`.home-about-social-item.${elementToMove}`)
			divelementToMove.style.left = `${mousePosition.x}px`
			divelementToMove.style.top =`${mousePosition.y}px`
			divelementToMove.classList.add("drag")
		}else{
			let allElement = document.querySelectorAll(`.home-about-social-item`)
			for(let i = 0; i<allElement.length; i++){
				allElement[i].classList.remove("drag")
			}
		}
	}, [mousePosition,dragDropState]);
	
	
	
	return (<section id={"about"} data-scroll data-scroll-section data-scroll-offset={"300"} className={"home-about"}>
			<div onClick={(e)=>dragDrop("instagram")} className={"home-about-social-item instagram"}>
				<img src={"images/instagram.svg"}/>
				<p className={"color-green text-30 regular"}>@balcokulus</p>
			</div>
		<div onClick={(e)=>dragDrop("twitter")} className={"home-about-social-item twitter"}>
			<img src={"images/twitter.svg"}/>
			<p className={"color-green text-30 regular"}>@balcokulus</p>
		</div>
		<div className={"home-about-container"}>
			<div className={"home-about-container-text"}>
				<h3 data-scroll data-scroll-speed={"2"} data-scroll-offset={"200"} data-scroll-direction={"horizontal"}
					className={"color-white regular text-120"}>
					<Tween playState={playState} from={{y: '100px', opacity: "0", rotate: 20}}
						   to={{y: '0', opacity: "100%", rotate: 0}}
						   ease="expo.out()"
						   duration={3} stagger={0.15}>
						<SplitChars
							wrapper={<span style={{display: 'inline-block'}}/>}
						>
							About
						</SplitChars>
					</Tween>
				</h3>
				<Reveal repeat>
					<Tween from={{opacity: 0}} to={{opacity: 1}} duration={2}>
						<p className={"color-white text-20 paragraph"} data-scroll data-scroll-speed={"-1"}
						   data-scroll-direction={"horizontal"}> Hi there! I'm a 20-year-old French painter who is
							passionate about art and collaborating with French designer brands. I love expressing myself
							through
							vibrant colors and bold shapes, creating artworks that captivate the imagination. Working
							with
							brands allows me to merge art and fashion, adding a unique artistic dimension to their
							creations. I
							draw inspiration from French culture and enjoy exploring new techniques to push the
							boundaries of my
							creativity.</p>
					</Tween>
				</Reveal>
			</div>
			<div className={"home-about-container-image"}>
				<img data-scroll data-scroll-speed={"3"} data-scroll-direction={"horizontal"} src={"/images/me.png"}/>
			</div>
		</div>
	
	</section>);
};


export default HomeAbout;
