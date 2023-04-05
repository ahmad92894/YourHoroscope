import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_HOROSCOPE } from '../utils/queries';
import { useLocation } from 'react-router-dom';

function Leo() {
    const {pathname} = useLocation();
    console.log(pathname.split('/')[1] );
    const signName = pathname.split('/')[1];
    const { loading, data } = useQuery(QUERY_SINGLE_HOROSCOPE, {
        variables: { sign: signName }});
    const horoscope = data?.horoscope || {};
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            hello
            <h1>{horoscope.Sign}</h1>
        </div>
    )
}

export default Leo;
