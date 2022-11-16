import React from 'react'
import CastomButton from '../UI/Button/CastomButton'
import './HomeCover.scss'
function HomeCover() {
	return (
		<div className='homeCover'>
			<div className="homeCover__container">
				<div className="homeCover__content">
					<div className="homeCover__content--title">
						<h1 className='homeCover__title--style'>
							<span>Find</span> all your favorite <span>Pokemon</span>
						</h1>
					</div>
					<div className="homeCover__content--description">
						<p className='homeCover__description--style'>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
					</div>
					<div className="homeCover__content--button">
						<CastomButton color='#73D677' boxShadow="inset 0px -9px 0px rgba(0, 0, 0, 0.18)">See pokemons</CastomButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeCover