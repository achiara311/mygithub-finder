import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    //in the brackets; destructuring properties from object
    //state is just a JAVASCRIPT OBJECT
    //targets all those properties

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="" className='round-img'
                style={{ width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More in link</Link>
                {/* now takes us to user component page */}
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserItem