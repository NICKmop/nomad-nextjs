import Link from "next/link";
import { useEffect, useState } from "react";

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
    return <div>{movies.map(movie => 
        <li key={movie.id}>
            <Link href={`movies/${movie.id}`}>${movie.title}</Link>
        </li>)}
    </div>
};


// React App =====> API <======> DB
// has to loading, page