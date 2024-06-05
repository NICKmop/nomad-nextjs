import MovieComponent from '../../components/movie/movie';
import styles from './home.module.css';
import '../styles/global.css';
import Link from 'next/link';


export const metadata = {
    title: "Home",
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = fetch(API_URL);
    const json = (await response).json();
    return json;
}
// async use : await priority
// default
export default async function HomePage() {
    const movies = await getMovie();
    
    return (
        <div className={styles.container}>
            {/* {JSON.stringify(movies)} */}

            { movies.map((movie) => {
                return <MovieComponent 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path} 
                />
            })
        }
        </div>
    );
};
{/* <div key={movie.id}>
    <img src={movie.poster_path} alt={movie.title} />
    <Link href={`movies/${movie.id}`}>${movie.title}</Link>
</div> */}

// React App =====> API <======> DB
// has to loading, page