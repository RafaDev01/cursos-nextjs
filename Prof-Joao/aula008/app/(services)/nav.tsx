import Link from "next/link"
import './nav.css'

export default () => {
    return (
        <nav>
            <Link className="link-nav" href="/service/1">Serviço 1</Link>
            <Link className="link-nav" href="/service/2">Serviço 2</Link>
            <Link className="link-nav" href="/service/3">Serviço 3</Link>
        </nav>
    )
}