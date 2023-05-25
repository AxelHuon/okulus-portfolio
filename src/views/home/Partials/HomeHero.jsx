import ReactParallaxTilt from "react-parallax-tilt";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap"
import {Expo} from "gsap/gsap-core";
import {SplitChars, Tween} from "react-gsap";

const HomeHero = () => {
	
	
	const style = {
		display: "inline-block"
	}
	
	const imgRef = useRef();
	const textRefIntro = useRef();
	const persoRef = useRef();
	
	
	const [statePlay, setStatePlay] = useState("stop");
	
	useEffect(() => {
		setTimeout(()=>{
			setStatePlay("play")
		},2500)
	}, []);
	
	
	useEffect(() => {
		gsap.to(imgRef.current, {opacity: 1, transition: 1.4, filter: "blur(0px)", scale: 1, ease: Expo.easeIn});
		gsap.to(textRefIntro.current, {opacity: 1, transition: 1.4, filter: "blur(0px)", scale: 1, ease: Expo.easeIn});
		gsap.to(persoRef.current, {opacity: 1, transition: 1.4, filter: "blur(0px)", scale: 1, ease: Expo.easeIn});
		
		
		const timelineColorText = new gsap.timeline({repeat:true})
		
		timelineColorText.to(textRefIntro.current, {color: "greenyellow", duration:3}, ">-1");
		timelineColorText.to(textRefIntro.current, {color: "blue", duration:3},">-1");
		timelineColorText.to(textRefIntro.current, {color: "red", duration:3},">-1");
		timelineColorText.to(textRefIntro.current, {color: "#0E87D0", duration:3},">-1");
		
		
	});
	
	
	const handleShake = () =>{
		const timeline = new gsap.timeline()
		timeline.to(persoRef.current, {x:10,duration:0.2});
	}
	
	
	return (<section id={"hero"} data-scroll data-scroll-section className={"home-hero"}>
			<div className={"home-hero-container"}>
				<div data-scroll data-scroll-speed={"-2"} className={"home-hero-container-perso"}>
					<img onClick={(e)=>handleShake()} ref={persoRef} src={"/images/perso.png"}/>
				</div>
				<div data-scroll data-scroll-speed={"-2"} className={"home-hero-container-text"}>
				<h2 ref={textRefIntro}  className={"text-200 regular color-primary"}>
					<Tween playState={statePlay} from={{opacity: "0"}} to={{opacity: "100%"}} ease="expo.out()" duration={3} stagger={0.15}>
						<SplitChars
							wrapper={<span style={{display:"inline-block"}}/>}
						>
							Okulus
						</SplitChars>
					</Tween>
				</h2>
				</div>
					<div data-scroll data-scroll-speed={"4"} className={"home-hero-container-image"}>
					<ReactParallaxTilt style={style} reset={true} tiltReverse={true} glareEnable={true} glareReverse={true} glareColor={"#FFF9F0"} scale={1.02} transitionEasing={"cubic-bezier(.03,.98,.52,.99)"} tiltMaxAngleX={10} tiltMaxAngleY={10}>
							<img className={"image-tab"} ref={imgRef} src={"/images/332172514_970661424301110_3590082735548445311_n.webp"}/>
						</ReactParallaxTilt>
					</div>
			</div>
		</section>);
};

export default HomeHero;
