import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1>About This App</h1>
            <p>
                This app is a handy tool that makes it easy to see info from users who are on Github.
            </p>
            <p>
                Here's what our app can do (Or should do as it's not complete):
                <ul>
                    <li>
                        <strong>Project Details:</strong> It shows you what a project on GitHub is all about - its name, what it does, the kind of code used in it, how many people liked it, and more.
                    </li>
                    <li>
                        <strong>User Info:</strong> It lets you learn more about the people using GitHub. You can see their username, photo, how many followers they have, what their bio says, and how many projects they're working on.
                    </li>

                    <li>
                        This app is not made by the same people who made GitHub. But don't worry, all the info we show you is public and comes straight from GitHub itself. We make sure to respect everyone's privacy and data.
                    </li>

                </ul>

            </p>
            <p>Version: 1.0.1</p>
        </Fragment>
    )
}

export default About
