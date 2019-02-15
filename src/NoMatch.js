import React from 'react'
import {Link} from 'react-router-dom'

function NoMatch () {
    return (
        <div>
            <h1>link does not exist</h1>
            <Link to = {'/Home'}>click to go back Home</Link> 
        </div>
    )
}

export default NoMatch