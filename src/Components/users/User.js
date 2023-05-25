import React, { Component, Fragment } from 'react';
import Spinner from "../layout/Spinner";
import { Link } from 'react-router-dom'
import Repos from "../repos/Repos"

export class user extends Component {
    state = {
        fetchedUser: false,
        page: 1
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login, this.state.page);
    }

    handleButtonClickNext = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), () => {
            this.props.getUser(this.props.match.params.login, this.state.page);
            this.props.getUserRepos(this.props.match.params.login, this.state.page);
        });
    }

    handleButtonClickBack = () => {
        if (this.state.page !== 1) {
            this.setState(prevState => ({ page: prevState.page - 1 }), () => {
                this.props.getUser(this.props.match.params.login, this.state.page);
                this.props.getUserRepos(this.props.match.params.login, this.state.page);
            })
        }
    }


    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = this.props.user
        const { loading, repos } = this.props

        if (loading) { return <Spinner /> }

        return (


            <Fragment>
                <Link to='/' className='btn btn-light'> Back to search</Link>
                Hireable: {' '} {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
                <div className="card grid-2"><div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                    </div>
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment> <strong>Username: </strong> {login} </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment> <strong>Company: </strong> {company} </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment> <strong>Website: </strong> <a href={blog}> {blog} </a> </Fragment>}
                        </li>
                    </ul>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">public Gists: {public_gists}</div>
                </div>

                <div className='all-center'>
                    <Repos repos={repos} />
                    <div className='backPageNext text-center'>
                        <button className='btn btn-light' onClick={this.handleButtonClickBack}> Back </button>
                        <h4>Page: {this.state.page}</h4>
                        <button className='btn btn-light' onClick={this.handleButtonClickNext}> Next </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default user
