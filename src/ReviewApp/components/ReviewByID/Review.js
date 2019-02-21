import React from 'react'
import PropTypes from 'prop-types'

const ReviewRow = (props) => {
    const {filmTitle, author, description, review} = props;
    return (
        <section className="SecForRev">
            <div>
                <h1>{filmTitle}</h1>
                <p>Автор: {author}</p>
                <p>Короткий опис: {description}</p>
            </div>
            <div>
                { review }
            </div>
        </section>
    )
};

ReviewRow.propTypes = {
    filmTitle: PropTypes.any.isRequired,
    author: PropTypes.any.isRequired,
    review: PropTypes.any.isRequired
};

export default ReviewRow;