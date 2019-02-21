import React from 'react'
import PropTypes from 'prop-types'
import ReviewRow from './ReviewRow'

const ReviewsTable = (props) => {
    const {reviews} = props;
    return(
        Object.keys(reviews).length ? (
                <table className="RevTab" border = "2px solid black">
                    <tbody>
                    {Object.keys(reviews).length && Object.keys(reviews).map((rev, i) =>
                        (<ReviewRow key = {i}{...reviews[rev]} {...props}/>))}
                    </tbody>
                </table>):
            <div>Список рецензій порожній</div>
    )
};

ReviewsTable.propTypes = {
    review: PropTypes.object.isRequired
};

export default ReviewsTable;
