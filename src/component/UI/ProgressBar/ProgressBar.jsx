import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './ProgressBar.scss'
function ProgressBar({ styleName, percent }) {
	const refProgressBar = useRef(null)
	useEffect(() => {
		refProgressBar.current.style.width = percent + '%';
	}, [percent])
	return (
		<div className="progress">
			<div className={"progress--bar" + ' ' + styleName} ref={refProgressBar}></div>
		</div>
	)
}

export default ProgressBar