import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/home'), {
    ssr: false
});

const Index = () => {
    return (
        <div>
            <Home />
        </div>
    )
}

export default Index