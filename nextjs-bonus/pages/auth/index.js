import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => {
    return (
        <div>
            <h1>This is auth index page</h1>
            <p>Go to 
                <Link href="/"><a> home page</a></Link>
            </p>
            <button onClick={() => Router.push('/')}>Go to home page</button>
            <User name='George' age={29} />
        </div>
    )
}

export default authIndexPage;