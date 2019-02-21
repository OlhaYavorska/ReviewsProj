import React from 'react'
import Review from './Review'

const ReviewByID = (props) => {
    const {id, reviews} = props;
    const res = reviews.filter((rev) => rev._id === id);
    if(res)
        return (
            Object.keys(res).map((rev) => (<Review {...res[rev]}/>))
        );
    else
        return (
            <div>
               По даному запиту нічого не знайдено
            </div>
        )
};

export default ReviewByID;