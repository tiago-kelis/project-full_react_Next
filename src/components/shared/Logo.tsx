import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <Image src="/logo.png" height={100} width={80} alt="image logo"/>
            <Image src="/logo-texto.png" height={80} width={80} alt="image_text"/>
        </Link>
    )
}