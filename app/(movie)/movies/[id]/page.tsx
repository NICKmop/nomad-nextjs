// const component = async movieDate => 
import MovieVideos from "../../../../components/movie/movie-videos";
import Movieinfo, { getMovie } from "../../../../components/movie/movie-info";
import { Suspense } from "react";
import { title } from "process";

interface  Iparams {
    params: {id:string}
}

export async function generateMetadata({params: {id}} : Iparams) {
    const movie = await getMovie(id);

    return {
        title: movie.title
    }
}

export default async function MovieDetail({ 
        params: { id }, 
    } : Iparams) {

    // 병렬 호출 위한 함수
    // const[movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log({ Promise })

    return (
        <div>
            <Suspense fallback= {<h1>Loading movie info</h1>}>
                <Movieinfo id={id}  />
            </Suspense>
            <Suspense fallback= {<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}  />
            </Suspense>
        </div>
    )
}