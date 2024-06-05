
import { API_URL } from '../../app/constant';
import styles from './movie-videos.module.css';

async function getVideos(id:string) {
    // console.log(`Fetching getVideos ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // throw new Error("something broker...");/

    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = response.json();
    return json;
}

async function onLoadVideo(){
    console.log("loading test")
    return true;
}

export default async function MovieVideos({id} : {id : string}) {
    const videos = await getVideos(id);

    return <div className={styles.container}>
        {videos.map((video) => <iframe 
            key={video.id} 
            src={`https://youtube.com/embed/${video.key}`}
            title={video.name}
        ></iframe>)}
    </div>
}