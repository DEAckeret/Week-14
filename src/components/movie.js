import React from 'react';
import '../App.css';
import Rating from "./rating.js"
import Review from "./review.js"

export default class Movie extends React.Component {
    render() {
        return (
            <div id = 'mainDiv'><br></br>
                <div className='card w-75 testCss'>
                    <div className='card-header bg-primary text-white'>
                        Jurrasic World
                    </div>
                    <div className='card-body bg-secondary'>
                        <img src = "/movie_posters/jworld.jpeg" alt='Jurrasic World Poster' id='moviePoster'/><br></br>
                        <p className = "text-white" id = 'reviewId'> Loch ness is back! and he's coming to challenge the mightiest wrestlers in this years thunderdome, winner take all cage match! Starring Hugh Jackman as the Batman.</p>
                    </div>
                    <div className='card-footer'>
                        <p>Rate This Movie! </p>
                        <Rating />
                        <div><br></br>
                            <Review />
                        </div>
                    </div>
                </div><br></br>
                <div className='card w-75'>
                    <div className='card-header bg-primary text-white'>
                        Lightyear
                    </div>
                    <div className='card-body bg-secondary'>
                        <img src = "/movie_posters/lightyear.jpeg" alt='Lightyear Poster' id='moviePoster'/><br></br>
                        <p className = "text-white" id = 'reviewId'> Spaceman hurls cat at the sun to prove he can. Never did he expect 30 years later for the understandably ferocious feline to come back to earth with a vengence. An enjoyable RomCom for the entire family to enjoy!</p>
                    </div>
                    <div className='card-footer'>
                        <p>Rate This Movie! </p>
                        <Rating />
                        <div><br></br>
                            <Review />
                        </div>
                    </div>
                </div><br></br>
                <div className='card w-75'>
                    <div className='card-header bg-primary text-white'>
                        Minions
                    </div>
                    <div className='card-body bg-secondary'>
                        <img src = "/movie_posters/minons.jpeg" alt='Minions Poster' id='moviePoster'/><br></br>
                        <p className = "text-white" id = 'reviewId'> Set during the Cold War, a little boy named Gru struggles to fit in at school. That is until one day, the Minions come to town and show Gru that its not how popular you are at school that counts, its about your online media presence!</p>
                    </div>
                    <div className='card-footer'>
                        <p>Rate This Movie! </p>
                        <Rating />
                        <div><br></br>
                            <Review />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}