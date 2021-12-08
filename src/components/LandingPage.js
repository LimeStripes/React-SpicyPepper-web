import React, {Component} from 'react'
import SecondaryNav from './SecondaryNav'
import { Link } from 'react-router-dom';

class LandingPage extends Component {

    render (){
    
        return (
            <div id="landing-page">
                <div id="landing-container" className="container">
                <h5 id="logo">&#9668;SPICY<span>PEPPER&#9658;</span></h5>
                <div className="splash">
                    <div className="col-sm-6">
                        <p>Meal planning for everyone!</p>
                        <Link to="/calendar" className="btn btn-primary">Get Started</Link> <a href="" className="btn btn-primary">Existing User</a>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;