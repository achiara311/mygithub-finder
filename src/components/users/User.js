
import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

function User({ getUser, repos, getUserRepos, loading, user: { //pulling from api of github user
    public_repos,
    public_gists, following,
    followers, blog,
    company,
    username,
    html_url,
    bio,
    location,
    name,
    hireable,
    avatar_url } }) {
    const { login } = useParams() //Returns an object of key/value pairs of the dynamic params 
    //from the current URL that were matched by the route path.

    useEffect(() => {
        getUser(login)
        getUserRepos(login) //getting login/userName paramater from getUser() in App.js line 90
    }, []);




    if (loading) return <Spinner></Spinner>;

    return <div>

        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable:{''}
            {hireable ? <i className="fas fa-check text-success" /> : <i className="fas 
            fa-times-circle text-danger"/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url}
                        className='round-img'
                        alt=""
                        style={{ width: '150px' }} />
                </div>
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>
            <div>
                {bio &&
                    (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>)}
                <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>UserName:{username}</strong>
                        </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company:{company}</strong>
                        </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Website:{blog}</strong>
                        </Fragment>}
                    </li>
                </ul>
            </div>

            <div className='card text-center'>
                <div className='badge badge-primary'>Followers:{followers}</div>
                <div className='badge badge-success'>Following:{following}</div>
                <div className='badge badge-light'>Public Repos:{public_repos}</div>
                <div className='badge badge-dark'>Public Gists:{public_gists}</div>
            </div>

            <Repos repos={repos}/>
        </Fragment>
    </div>


}

export default User

