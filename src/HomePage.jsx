import './homepage.css'


const videos = [{
    id: 1,
    title: "Test",
    thumbnail: "/crossandres-icon.png"
}, {
    id: 2,
    title: "Test 2",
    thumbnail: '/boydenchurch.jpg'
}]


function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage-banner">
                <h1>Today there is going to be free lunch!</h1>
                <p>Get your free lunch now while supplies last.</p>
            </div>
            <div className="latest-sermons">
                <div className='text-containers'>
                    <h2>Latest Sermons</h2>
                    <h2>View All </h2>
                </div>
                <div className='carousel-banner'>
                    <div className='carousel'>
                        {videos.map((video, index) => (
                            <div className='video-container' key={index}>
                                Name: {video.title}, Id: {video.id}
                                <img src={video.thumbnail}></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="latest-quotes">
            <div className='text-containers'>
                    <h2>Latest Quotes</h2>
                    <h2>View All </h2>
                </div>
                <div className='carousel-banner'>
                    <ul className='carousel'>
                        <li className='test-video-tn'>a</li>
                        <li className='test-video-tn'>a</li>
                        <li className='test-video-tn'>a</li>
                        <li className='test-video-tn'>a</li>
                        <li className='test-video-tn'>a</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage