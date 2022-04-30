import React, { useState, useEffect } from 'react';
import getBlockchain from '../../configs/ethereum.js'
import campusImg from '../../assert/campus.jpg'
import './index.css'

function Main() {
    const [like_contract, set_like_contract] = useState(undefined);
    const [isLiked, setLikeStatus] = useState(undefined);

    useEffect(() => {
        const init = async () => {
            const { like_contract } = await getBlockchain();
            const isLiked = await like_contract.likeStatus();
            set_like_contract(like_contract);
            setLikeStatus(isLiked);
        };
        init();
    }, []);

    const updateLikeStatus = async () => {
        const tx = await like_contract.manageLike();
        await tx.wait();
        const newLikeStatus = await like_contract.likeStatus();
        setLikeStatus(newLikeStatus);
    };

    if (typeof like_contract === 'undefined' || typeof isLiked === 'undefined') {
        return 'Loading...';
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="leftBox">
                        <div className="imgBox">
                            <img src={campusImg} alt="img" />
                        </div>
                        <div className="likeBox">
                            <button
                                className="btn btn-danger"
                                onClick={updateLikeStatus}
                            >
                                {isLiked ? 'Unlike' : 'Like'}
                            </button>
                            {isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
