import React, { useContext, useEffect } from 'react';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import { useLocation } from 'react-router-dom';
import { LoadingContext} from "./context";

const LocoScroll = ({ direction, innerRef, children }) => {
	const location = useLocation();
	const { loadingStateRef } = useContext(LoadingContext);
	
	const checkScreenHeight = () => {
		if (
			window.innerHeight > innerRef.current.scrollHeight ||
			!document.querySelector('.c-scrollbar_thumb')
		) {
			return;
		}
		document.querySelector('.c-scrollbar_thumb').removeAttribute('style');
	};
	
	useEffect(() => {
		loadingStateRef.current.classList.add('is-loaded');
	}, [loadingStateRef]);
	
	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				lerp: 0.09,
				direction: direction,
				reloadOnContextChange: true,
				scrollbarContainer: document.getElementById('___gatsby'),
				tablet: {
					breakpoint: 0,
					smooth: true,
				},
				repeat:true,
			}}
			watch={[]}
			containerRef={innerRef}
			location={location}
			onLocationChange={(scroll) => {
				checkScreenHeight();
				scroll.update();
				scroll.scrollTo(0, { duration: 0, disableLerp: true });
			}}
		>
			{children}
		</LocomotiveScrollProvider>
	);
};

export default LocoScroll;
