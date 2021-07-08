import { Component } from "react";
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <p>Click to route to "Let's go" navigation to Home pages.</p>
                <Link to="/">
                    Let's go
                </Link>
            </div>
        )
    }
}
export default NotFound;