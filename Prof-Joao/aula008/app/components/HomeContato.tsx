import Link from "next/link";

const HomeContato = (): any => {
    return (
        <section className="home-contato">
            <h1 className="text-center mb-5">Entre em contato</h1>
            <div className="text-center">
                <Link href="/contacts" className="contato-button">Contato</Link>
            </div>
        </section>
    )
}

export default HomeContato;