import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import RenderReviewsTable from './components/ReviewsTable/index'
import ReviewByID from './components/ReviewByID'
import LoginModalForm from './components/LoginForm'
import AddReviewForm from './components/AddReviewForm';
import {database} from '../base';
import {getAuthFunction} from '../auth'

class ReviewApp extends Component {
    constructor (props){
        super(props);
        this.state = {
            reviews: [],
            user: undefined,
            showModal: false
        };
        this.auth = getAuthFunction(this,'reviews_list','reviews');
    }

    showModalForm = () => {
        this.setState({
            ...this.state,
            showModal: true
        });
    };
    hideModalForm =() => {
        this.setState({
            ...this.state,
            showModal: false
        })
    };
    addReview = (rev) => {
        const prevRev = (Array.isArray(this.state.reviews)?this.state.reviews:[]);
        this.setState({
            ...this.state,
            reviews: [...prevRev, rev]
        });
    };
    componentWillMount(){
        this.msgRef=database.syncState('reviews_list',{
            context:this,
            state:'reviews'
        })
    }
    componentWillUnmount(){
        database.removeBinding(this.msgRef);
    }
    render () {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <link rel="stylesheet" href="../stylesheet.css"/>
                    </header>
                    <main>
                        <section className="MainSec">
                                <Link className="links" to="/"> Головна </Link>
                                <Link className="links" to="/reviews"> Рецензії </Link>
                                {this.state.user && <Link className="links" to="/addReview"> Додати рецензію </Link>}
                            {this.state.user ?
                                <Link to="/" className="links" onClick={this.auth.signOut}> Вийти </Link>
                                :
                                <href className="links" onClick={this.showModalForm}> Ввійти </href>
                            }
                        </section>

                    </main>
                    <section>
                        {this.state.showModal && <LoginModalForm
                            SignIn = {this.auth.signIn}
                            SingOut ={this.auth.signOut}
                            SignUp = {this.auth.signUp}
                            user = {this.state.user}
                            hideModalForm = {this.hideModalForm}/>}
                        <Switch>
                            <Route path = "/reviews" render = {
                                ({history}) => {
                                    return <RenderReviewsTable reviews = {this.state.reviews} history={history}/>}
                            }/>
                            <Route path = '/review/:id' render = {
                                ({history, match}) => <ReviewByID  id={match.params['id']} reviews = {this.state.reviews}/>}/>
                            <Route path = "/addReview" render = {
                                () => <AddReviewForm addReview = {this.addReview}/>}/>
                            <Route path = "/" component = {Home}/>
                        </Switch>
                    </section>
                </div>

            </BrowserRouter>
        )
    }
}

export default ReviewApp;