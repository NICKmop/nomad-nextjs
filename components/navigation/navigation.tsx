"use client";
// css 파일 모듈 화 styles + 파일 명

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
    const path = usePathname();

    return (
        <nav className={styles.nav}>
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