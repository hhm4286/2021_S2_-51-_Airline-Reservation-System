import './destinations.scss';
import logo1 from '../../images/destinations/bali.jpg'
import logo2 from '../../images/destinations/china walls.jpg'
import logo3 from '../../images/destinations/newYorkjpg.jpg'
import logo4 from '../../images/destinations/paris.jpg'
import logo5 from '../../images/destinations/singapore.jpg'
import logo6 from '../../images/destinations/Sydney.jpg'

import React from 'react'

export default function Destinations() {
    return (
        <>
            <div className="destinations" id='destinations'>
                <div className="destinationWrapper">
                    <h1 className="destinationTitle">Top destinations for holidays</h1>
                    {/* <h3 className="title">What are you waiting for</h3> */}
                </div>

                <div className="post">
                    {/* bali */}
                    <div className="postInfo1">
                        <img className="bali" src={logo1} alt="logo" />
                        <div className="postOne">
                            <span className="postName">Bali</span>
                        </div>
                        <span className="postDescription">Beautiful and relaxing place</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            Bali, the famed Island of the Gods, with its varied landscape of hills and mountains,
                            rugged coastlines and sandy beaches, lush rice terraces and barren volcanic hillsides
                            all providing a picturesque backdrop to its colourful, deeply spiritual and unique
                            culture, stakes a serious claim to be paradise on earth.
                        </p>
                    </div>

                    {/* china */}
                    <div className="postInfo2">
                        <img className="china" src={logo2} alt="logo" />
                        <div className="postTwo">
                            <span className="postName">China</span>
                        </div>
                        <span className="postDescription">Experience the longest ancient walls</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            The Great Wall of China is a series of fortifications that were built across
                            the historical northern borders of ancient Chinese states. It is the longest
                            structure humans have ever built. It is about 21,196 kilometers long, 9.1 metres
                            (30 feet) wide and 15 metres high.
                        </p>
                    </div>

                    {/* New York */}
                    <div className="postInfo3">
                        <img className="china" src={logo3} alt="logo" />

                        <div className="postThree">
                            <span className="postName">New York</span>
                        </div>
                        <span className="postDescription">The most gigantic city in the world</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            New York City has been described as the cultural, financial, and media capital of the world,
                            significantly influencing commerce, entertainment, research, technology, education,
                            politics, tourism, art, fashion, and sports, and is the most photographed city in
                            the world.
                        </p>
                    </div>

                </div>

                <div className="post2">
                    {/* bali */}
                    <div className="postInfo1">
                        <img className="bali" src={logo4} alt="logo" />
                        <div className="postOne">
                            <span className="postName">Paris</span>
                        </div>
                        <span className="postDescription">The heart of Europe</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France.
                            Paris is also the center of French economy, politics, traffic and culture.
                            Paris has many art museums and historical buildings. As a traffic center,
                            Paris has a very good underground subway system (called the Metro).
                        </p>
                    </div>

                    {/* china */}
                    <div className="postInfo2">
                        <img className="china" src={logo5} alt="logo" />
                        <div className="postTwo">
                            <span className="postName">Singapore</span>
                        </div>
                        <span className="postDescription">The most advanced country in Asia</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            Singapore is a wealthy city state in south-east Asia. Once a British colonial trading post,
                            today it is a thriving global financial hub and described as one of Asia's economic
                            "tigers". It is also renowned for its conservatism and strict local laws and the
                            country prides itself on its stability and security
                        </p>
                    </div>

                    {/* New York */}
                    <div className="postInfo3">
                        <img className="china" src={logo6} alt="logo" />

                        <div className="postThree">
                            <span className="postName">Sydney</span>
                        </div>
                        <span className="postDescription">Explore the opera house</span>
                        <hr /> {/* add a border line */}
                        <p className="postDesc">
                            Sydney is the largest and most populous city in Australia and the state
                            capital of New South Wales. Sydney is located on Australia's south-east coast of
                            the Tasman Sea. Inhabitants of Sydney are called Sydneysiders, comprising
                            a cosmopolitan and international population of people from numerous places
                            around the world.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
