// const component = async movieDate => 
import MovieVideos from "../../../../components/movie-videos";
import Movieinfo from "../../../../components/movie-info";
import { Suspense } from "react";



export default async function MovieDetail({ 
        params: { id }, 
    } : {
        params: {id: string}; 
    }) {

    // 병렬 호출 위한 함수
    // const[movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log({ Promise })

    return (
        <div>
            <Suspense fallback= {<h1>Loading movie info</h1>}>
                <Movieinfo   id={id}  />
            </Suspense>
            <Suspense fallback= {<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}  />
            </Suspense>
        </div>
    )
}