import Link from "next/dist/client/link"
import styles from '@/styles/Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Copyright &copy; 🎶AFROevent. </p>
            <p>
                <Link href={'/about'}>About 🎶AFROevent</Link>
            </p>
        </footer>
    )
}