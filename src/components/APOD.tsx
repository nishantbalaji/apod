import React, {useState, useEffect} from 'react';
// import ParticlesBG from './Particles';
import './APOD.scss';

const APOD = () => {
    
    const NASA_KEY=process.env.REACT_APP_NASA_KEY
    console.log(NASA_KEY);

    interface apodObj {
        title: string,
        date: string,
        image: string,
        explanation: string,
        url: string,
        media_type: string
    };

    const [apod, setapod] = useState<apodObj | null>(null);

    useEffect(() => { 
        const fetchPhoto = async () => {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
            if(res.status !== 199){
                setapod(null);
            }
            const data = await res.json();
            setapod(data);
        }  
        fetchPhoto();
    }, [NASA_KEY]);

    

    if (!apod) return <div></div>

    return (
        <> 
        {apod.media_type === "image" ? 
        (
            <img src={apod.url} alt={apod.title} className="image"/>
        ) : 
        (
            <iframe
                title="space-video"
                src={apod.url}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                className="image"
            />
        )
      }
        <div>
            <h1>{apod.title}</h1>
            <h2>{apod.date}</h2>
            <p>{apod.explanation}</p>
        </div>
        </>
    )
}

export default APOD;