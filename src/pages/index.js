import dynamic from 'next/dynamic';
import StoryList from '../components/storylist'
import ShipMates from '../components/shipmates'
import WantedPoster from '../components/wantedposter'
import { useEffect, useState } from 'react'

const Home = dynamic(() => import('../components/home'), {
    ssr: false
});



export default function Index() {
    return (
        <div>
            <Home />
        </div>
    )
}
