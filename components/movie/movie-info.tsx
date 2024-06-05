import { API_URL } from "../../app/(home)/page";
import styles from './movie-info.module.css';

export async function getMovie(id:string) {
    // console.log(`Fetching getMovie ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    const json = response.json();
    return json;
}

export default async function Movieinfo({id} : {id : string}) {
    const movie = await getMovie(id);
    // return <h6>{JSON.stringify(movie)}</h6> className

    return <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} />
        <div>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>POINT : {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>Hompage === Go </a>
        </div>
    </div>
}