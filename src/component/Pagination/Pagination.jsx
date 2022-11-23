import React from 'react'
import './Pagination.scss'
function Pagination({paginationChange}) {
    return (
        <div className="pogination">
            <div className="pogination__item">
                <button className='pogination__item--btn' onClick={() => paginationChange('pref')}></button>
            </div>
            <div className="pogination__item">
                <button className='pogination__item--btn'></button>
            </div>
            <div className="pogination__item">
                <button className='pogination__item--btn' onClick={() => paginationChange('next')}></button>
            </div>
        </div>
    )
}

export default Pagination