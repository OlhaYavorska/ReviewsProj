import React, {Component} from 'react'
import {v4} from 'uuid'

class AddReviewForm extends Component {
    constructor (props){
        super (props);
        this.filmTitleRef = React.createRef();
        this.authorRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.reviewRef = React.createRef();
    }

    handleReview = (e) => {
        e.preventDefault();
        let review = {
            _id: v4(),
            filmTitle: this.filmTitleRef.current.value,
            author: this.authorRef.current.value,
            description: this.descriptionRef.current.value,
            review: this.reviewRef.current.value
        };
        this.props.addReview(review);
        this.onFocus();
    };

    onFocus () {
        this.filmTitleRef.current.value = " ";
        this.authorRef.current.value = " ";
        this.descriptionRef.current.value = " ";
        this.reviewRef.current.value = " ";

    }

    render ()
    {
        return(
            <div >
                <form className="AddReviewForm">
                    <label htmlFor="filmTitle"> Назва фільму: <br/>
                        <input className="form" id="filmTitle" type="text" ref={this.filmTitleRef}/>
                    </label>
                    <br/>
                    <label htmlFor="author"> Автор:<br/>
                        <input className="form" id="author" type="text" ref={this.authorRef}/>
                    </label>
                    <br/>
                    <label htmlFor="description"> Короткий Опис:<br/>
                        <textarea className="AddDesc"  id="description" ref={this.descriptionRef}/>
                    </label>
                    <br/>
                    <label htmlFor="review"> Рецензія:<br/>
                        <textarea className="AddReview" id="review"  ref={this.reviewRef}/>
                    </label>
                    <br/>
                    <input  type="submit" onClick={this.handleReview}/>

                </form>
            </div>
        )
    }
}

export default AddReviewForm;
