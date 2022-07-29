import React from 'react';
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div className='items-center'>
            <div className=' flex flex-row'>
                <div className='mx-5'><Link to="/">전체</Link></div>   
                <div className='mx-5'><Link to="/korean">한식</Link></div>
                <div className='mx-5'><Link to="/chinese">중식</Link></div>
                <div className='mx-5'><Link to="/japanese">일식</Link></div>
                <div className='mx-5'><Link to="/west">양식</Link></div>
                <div className='mx-5'><Link to="/coffee">카페</Link></div>
                <div className='mx-5'><Link to="/mypage">마이페이지</Link></div>
            </div>
        </div>
    );
};

export default Categories;