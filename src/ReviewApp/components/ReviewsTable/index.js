import React, {PureComponent} from 'react'
import ReviewsTable from './ReviewsTable'

class RenderReviewsTable extends PureComponent {
    constructor(props) {
        super(props)
    }
    AllReviews = (id) => {
        this.props.history.push(`/review/${id}`);
    };
    render () {
        return (
            <div >
                <ReviewsTable {...this.props} getReview = {this.AllReviews}/>
            </div>
        )
    }
}

export default RenderReviewsTable;