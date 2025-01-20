import next from "next";
import "./css/Nav.css"
import Link from "next/link";
import Image from "next/image"

const Nav = (): any => {
    return (
        <nav className="nav-wrapper">
            <Image src="/assets/esfera.png" alt="logo" width={300} height={150} priority ></Image>
            <div>
                <Link href={"/"} className="link">Home</Link>
                <span> | </span>
                <Link href={"/services"} className="link">Serviços</Link>
                <span> | </span>
                <Link href={"/contacts"} className="link">Contatos</Link>
            </div>
        </nav>
    )
}

export default Nav;