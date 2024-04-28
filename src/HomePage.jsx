import './homepage.css'
import Image from './assets/boydenchurch.jpg'
import ImageTwo from './assets/thumbnailone.jpg'
import ImageThree from './assets/thumbnailtwo.jpg'



const videos = [{
    id: 1,
    title: "Sermon Title #1",
    thumbnail: Image,
    alt: "Description of picture"
}, {
    id: 2,
    title: "Sermon Title #2",
    thumbnail: ImageTwo,
    alt: "Description of picture"
}, {
    id: 3,
    title: "Sermon Title #3",
    thumbnail: ImageThree,
    alt: "Description of picture"
}]

const quotes = [{
    title: "Quote title #1",
    body: "This is a quote made by the developer which is used as a test"
}, {
    title: "Quote title #1",
    body: "This is a quote made by the developer which is used as a test"
}, {
    title: "Quote title #1",
    body: "This is a quote made by the developer which is used as a test"
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
                    <h2><a className='view-all' href="/Sermons">View All ➜</a></h2>
                </div>
                <div className='carousel-banner'>
                        {videos.map((video, index) => (
                            <div className='video-container' key={index}>
                                <img alt={video.alt} src={video.thumbnail}></img>
                                <h3>{video.title}</h3>
                            </div>
                        ))}
                </div>
            </div>
            <div className="latest-quotes">
            <div className='text-containers'>
                    <h2>Latest Quotes</h2>
                    <h2><a className='view-all' href='/Quotes'>View All ➜</a></h2>
                </div>
                <div className='carousel-banner'>
                    {quotes.map((quote, index) => (
                                <div className='quotes-container' key={index}>
                                    <h3>{quote.title}</h3>
                                    <p>{quote.body}</p>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage