import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PreviewSlider from "../PreviewSlider/PreviewSlider";
import { useDispatch, useSelector } from "react-redux";
import { ChangeVarietiesContent } from "../../redux/reducers/varietiesContent";
import './ChoiceSlider.scss'
function ChoiceSlider({ typeList }) {
	const dispatch = useDispatch();
	const pokiList = useSelector(state => state.varieties.normal);
	const indexShow = useRef(10)
	return (
		<div className="">
			<div className=""></div>
			<Swiper
				slidesPerView={6}
				spaceBetween={typeList.length - 1}
				loop={true}
				navigation={true}
				modules={[Navigation]}
				pagination={{
					clickable: true,
				}}
				// dispatch(ChangeVarietiesContent(pokiList[indexShow]
				onSlidePrevTransitionStart={() => {
					indexShow.current = (indexShow.current != 0 ? indexShow.current - 1 : typeList.length - 1);
					dispatch(ChangeVarietiesContent(pokiList[indexShow.current]));
				}}
				onSlideNextTransitionEnd={() => {
					indexShow.current = (typeList.length - 1 > indexShow.current ? indexShow.current + 1 : 0);
					dispatch(ChangeVarietiesContent(pokiList[indexShow.current]))
				}}
				// modules={[Pagination]}
				className="mySwiper"
			>
				{
					typeList.map(typeItem =>
						<SwiperSlide key={typeItem.name}>
							<PreviewSlider typeItem={typeItem} />
						</SwiperSlide>
					)
				}
			</Swiper>
		</div>
	)
}

export default ChoiceSlider