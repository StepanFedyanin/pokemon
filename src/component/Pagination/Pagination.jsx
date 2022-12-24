import React from 'react'
import { useDispatch } from 'react-redux';
import { addValuePagination, subtractValuePagination } from '../../redux/reducers/pagination';
import './Pagination.scss'
function Pagination({ paginationChange }) {
	const dispath = useDispatch();
	return (
		<div className="pogination">
			<div className="pogination__item">
				<button className='pogination__item--btn' onClick={() => dispath(subtractValuePagination(9))}></button>
			</div>
			<div className="pogination__item">
				<button className='pogination__item--btn'></button>
			</div>
			<div className="pogination__item">
				<button className='pogination__item--btn' onClick={() => dispath(addValuePagination(9))}></button>
			</div>
		</div>
	)
}

export default Pagination