import React from 'react'
import propTypes from 'prop-types'

const RepoItem = ({ repo }) => {
    return (
        <div className="card btn-block text-left">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <h5>Watchers: {repo.watchers}</h5>
            <h5>Forks: {repo.forks}</h5>
        </div>
    )
}

RepoItem.propTypes = {
    repo: propTypes.object.isRequired
}

export default RepoItem