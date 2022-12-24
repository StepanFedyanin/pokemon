import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeVarietiesContent } from "../../redux/reducers/varietiesContent";
import './PreviewSlider.scss'
function PreviewSlider({ typeItem }) {
	const dispatch = useDispatch();
	const varietiesContent = useSelector(state => state.varietiesContent);
	return (
		<div className={varietiesContent.name == typeItem.name ? "PreviewSlider" : 'PreviewSlider__filter'} onClick={() => dispatch(ChangeVarietiesContent(typeItem))}>
			<div className="PreviewSlider__container">
				<div className="PreviewSlider__cover">
					<img src={typeItem.sprites.other.home.front_default} alt="" />
				</div>
				<div className="PreviewSlider__name">
					<p className="PreviewSlider__name--style">{typeItem.name}</p>
				</div>
			</div>
		</div>
	)
}

export default PreviewSlider