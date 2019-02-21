import React from 'react'


const ReviewRow = (props) => {
    const {_id, filmTitle, author, description, getReview} = props;
    const onClick=(e) => {
        e.preventDefault();
        getReview(_id);
    };
    return (<tr >
        <h1 align="center" onClick={onClick} ><u> {filmTitle}</u></h1>
        <p>  Автор: {author}</p>
        <p>  Короткий опис: {description}</p>
        <hr color="gray"></hr>

    </tr>)
};

export default ReviewRow;