"use client"; // 작성을 안할시 use server 가 default라고 보면됨.

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();

    return (
        <nav>
            <ul>
                <Link href="/">
                    <li>{path == '/' ? "Home!!!!" : "Home"}</li>
                </Link>
                <Link href="/about-us">
                    <li>{path == '/about-us' ? "about-us!!!!" : "about-us"}</li>
                </Link>
            </ul>
        </nav>
    )
}

// nomad-movies.nomadcoders.workers.dev