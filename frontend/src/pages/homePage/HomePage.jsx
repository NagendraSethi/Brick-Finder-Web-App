import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

export default function HomePage() {
    return (
        <div className="home-page">
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate & Turn Your Dream into Reality</h1>
                    <p>Explore a wide range of properties tailored to your needs. Whether you’re searching for a cozy apartment, a spacious house, or a prime commercial space, we connect you with the perfect place to call your own. Your journey to finding the dream location starts here!</p>
                    <SearchBar />
                    <div className='boxes'>
                    <div className='box'>
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className='box'>
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className='box'>
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}