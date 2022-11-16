import React from 'react'
import './CastomButton.scss'
function CastomButton({ children, color, boxShadow }) {
	return (
		<button style={{ 'background': color, 'box-shadow': boxShadow }} className="CastomButton"> {children}</button >
	)
}

export default CastomButton