import React from 'react';
// 맛집 리스트 출력
const Posts = ({posts, loading}) => {
    return (
        <>
            {loading && <div> loading... </div>}
            <div>
                {posts.map((post)=> (
                    <div key={post.id} className='border-b-4 my-5'>
                        <div className='px-5'>
                            <p className='text-lg'>{post.name}</p>
                            <p className='text-sm text-gray-400'>{post.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;