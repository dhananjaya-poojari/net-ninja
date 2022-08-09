import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Where are you</h2>
            <p> I need to build this page</p>
            <Link to='/'> Lets go to home </Link>
        </div>
     );
}
 
export default NotFound;