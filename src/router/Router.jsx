import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from "../views/Home/Home";
import { Route, Routes } from "react-router-dom";
import LocoScroll from "../utils/LocoScroll";
import Header from "../layouts/Header";

const Router = () => {
	
	const ref = useRef();
	const location = useLocation();
	
	return (
		<LocoScroll innerRef={ref} direction="vertical">
			<div className={"smooth-scroll"}  data-scroll data-scroll-container ref={ref}>
				<Header />
				<Routes>
					<Route path="/" element={<Home  />} />
				</Routes>
			</div>
		</LocoScroll>
	);
};

export default Router;
