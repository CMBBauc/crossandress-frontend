import './about.css'
import mark from './assets/pictureofmark.jpg'
import boydenChurch from './assets/boydenchurch.jpg'

function About() {
    return (
        <div className='aboutpage'>
            <div className='heading-banner'>
                <h1> Reverend Mark Jamison</h1>
            </div>
            <img  className='image-of-mark' src={mark} alt='Photo of Mark Jamison and his wife'></img>
            <div className='about-banner-right'>
                <div>
                    <h3>Certified in the following areas...</h3>
                    <ul>
                        <li>North American Lutheran Church(NALC) Clergy</li>
                        <li>Lutheran Congregations in Mission for Christ(LCMC) Clergy</li>
                        <li>Adjunct Professor of Preaching at the Institute of Lutheran Theology</li>
                    </ul>
                </div>
                <img  className='banner-image' src={boydenChurch} alt='Photo of a church that marked worked at'></img>
            </div>
            <div className='about-banner-left'>
                <img className='banner-image' src={boydenChurch} alt='Test photo'></img>
                <p className='text-container'>"As a theologian of the cross, I preach the good news of Christ's death
                    and resurrection specifically for the forgiveness of our sins and the
                    new life of faith in Christ. I preach the BIble and Traditional Lutheran
                    Theology. The good news is presented in such a way as to provide
                    congregation with the hope and blessings of this wonderful gift Christ
                    has given us. This gift is given to us in our baptism. The Lord's Supper and in Preaching.
                    Hearing the good news gives each of you the power and confidence to live a life that is richly
                    blessed and enhanced by this proclamation"</p>
            </div>
            <div className='about-banner-right'>
                <div><h3>Short & To The Point</h3>
                <p>Sometimes those who are providing your inspiration to get you through
                    next week, belabor the point with the repetition and thereby insulting the hearer's
                    intelligence. Reveverend Jamison recognizes that your time is valuable and
                    does not want to waste it by reviewing all the information already stated & you have
                    already processed.
                </p>
                </div>
                <img  className='banner-image' src={boydenChurch}alt='Test Photo'></img>
            </div>
            <div className='about-banner-left'>
                <img className='banner-image' src={boydenChurch}alt='Test photo'></img>
                <div className='text-container'>
                    <h3>Faith Comes Through Meaning</h3>
                    <p>Listening to God's word provides you strength and courage to go through your
                        life using faith received through preaching of both the law and the gospel.</p>
                </div>
            </div>
            <div className='about-banner-right'>
                <div className='text-container'>
                    <h3>Driving The Point Home</h3>
                    <p>As a person listening to the information provided, you will be the
                        benefieciary of stories from every day life giving you a message
                        needed to get through the week ahead.
                    </p>
                </div>
                <img  className='banner-image' src={boydenChurch} alt="sample"></img>
            </div>
            <div className='about-banner-left'>
            <img  className='banner-image' src={boydenChurch} alt="sample"></img>
                <div className='text-container'>
                    <h3>How Does This Work?</h3>
                    <p>Both a digital copy and written copy of a sermon are provided for
                        each Sunday via Zoom. The lectionary is followed, giving the
                        assurance that the content is timely and will fit in with the reading for the week.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About