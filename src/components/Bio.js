import React from 'react';
import Beachprofile from '../img/Beachprofile.jpg'
import {Biosection, Intro, Img} from '../styles';

export default function Bio(){
    return(
        <Biosection>
            <Img src= {Beachprofile} alt='profile image'/>
            <Intro>
                <h1>Who am I?</h1>
                <p>I am on my way to becoming a full stack web developer. I started my program at Lambda School in August 2019 and I am due to graduate in June of 2020. This journey is extremely invigorating and I look forward to seeing where it takes me! Outside of programming I enjoy spending my time making 'Happy Mail', mixed media art, reading, and hiking. Nothing makes me feel more at peace than being surrounded by nature and I hope one day to own property where I can live the rural lifestyle I dream of.</p>
            </Intro>
        </Biosection>
    )
}