import React, { useState, useEffect} from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import Categories from './Categories';


const Chinese = () => {
        const [posts, setPost] = useState([]);
        const [loading, setLoading] = useState(false)
        const [currentPage, setCurrentPage] = useState(1)
        const [postsPerPage, setPostsPerPage] = useState(6)
    
        useEffect(() =>{
            const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://afd8cb3b-0077-4554-a7be-4ce86d83222c.mock.pstmn.io/cn"

            );
            setPost(response.data);
            setLoading(false)
            };
            fetchData()
        },[]);
    
        const indexOfLast = currentPage * postsPerPage;
        const indexOfFirst = indexOfLast - postsPerPage;
        const currentPosts = (posts) => {
            let currentPosts = 0;
            currentPosts = posts.slice(indexOfFirst, indexOfLast);
            return currentPosts;
        };
    
        return (
            <div>
                <Categories />
                <Posts posts={currentPosts(posts)} loading={loading}></Posts>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    Paginate={setCurrentPage}
                    >
                </Pagination>
            </div>
        );
};

export default Chinese;