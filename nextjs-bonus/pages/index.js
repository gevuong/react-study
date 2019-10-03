import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
    <div>
        <h1>this is main page</h1>
        <p>Go to 
            <Link href="/auth" title="auth page">
                <a>Auth</a>
            </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
    </div>
)


export default indexPage;