import {Reveal, SplitChars, Tween} from 'react-gsap';
import gsap from "gsap"

const HomeForeverVacation = () => {
	
	
	return (
		<section data-scroll data-scroll-section data-scroll-offset={"500"} id={"forever"} className={"home-forever-vacation"}>
			<Reveal repeat>
				<Tween from={{ width:"60%", heigth:"40%", opacity:0}} to={{width:"100%", height:"100%", opacity :1}} duration={1}>
		<aside className={"home-forever-vacation-container"}>
			<div className={"home-forever-vacation-container-content"}>
				<p className={"text-75 regular color-white"}>
					<Reveal repeat>
						<Tween from={{ opacity : 0, filter:"blur(20px)" }} to={{opacity:1, filter:"blur(0px)"}} duration={1}  stagger={0.5}>
							<SplitChars
								wrapper={<span data-scroll data-scroll-speed={"3"} style={{ display: 'inline-block', }} />}
							>
								Collab with
							</SplitChars>
						</Tween>
					</Reveal>
				</p>
				<img data-scroll data-scroll-speed={"1"} src={"images/LOGO-Forever-Vacation.webp"}/>
				<a data-scroll data-scroll-speed={"2"} className={"button-custom regular"} href={"https://forever-vacation.com/"}>Go to the shop</a>
			</div>
		</aside>
				</Tween></Reveal>
	</section>
);
};

export default HomeForeverVacation;
