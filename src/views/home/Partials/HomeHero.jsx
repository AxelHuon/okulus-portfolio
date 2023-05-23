import ReactParallaxTilt from "react-parallax-tilt";
import {useEffect, useRef} from "react";
import gsap from "gsap"
import {Expo} from "gsap/gsap-core";
import {SplitChars, Tween} from "react-gsap";

const HomeHero = () => {
	
	
	const style = {
		display: "inline-block"
	}
	
	const imgRef = useRef();
	
	useEffect(() => {
		gsap.to(imgRef.current, {opacity: 1, transition: 1.4, filter: "blur(0px)", scale: 1, ease: Expo.easeIn});
	});
	
	return (<div className={"home-hero"}>
			<div className={"home-hero-container"}>
				<h2 className={"text-200 regular color-primary"}>
					<Tween from={{x: '-100px', opacity: "0", rotate: 20}} to={{x: '0', opacity: "100%", rotate: 0}} ease="expo.in()" duration={1.4} stagger={0.15}>
						<SplitChars
							wrapper={<span/>}
						>
							Okulus
						</SplitChars>
					</Tween>
				</h2>
				<ReactParallaxTilt style={style} reset={true} tiltReverse={true} glareEnable={true} glareReverse={true} glareColor={"#FFF9F0"} scale={1.02} transitionEasing={"cubic-bezier(.03,.98,.52,.99)"} tiltMaxAngleX={10} tiltMaxAngleY={10}>
					<img ref={imgRef} src={"src/assets/images/332172514_970661424301110_3590082735548445311_n.webp"}/>
				</ReactParallaxTilt>
			</div>
		</div>);
};

export default HomeHero;
