import Image from "next/image"

export default function HomeIntro(): any {
    return (
        <section className="home-wrapper">
            <div className="text-center">
                <Image src="/assets/esfera.png" alt="esfera" width={160} height={100} priority></Image>
            </div>

            <h1 className="mb-3">Bem vindo a nossa empresa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi non aspernatur odit aut ullam rerum, earum ex, veniam accusamus inventore tempora officia libero enim nulla error deserunt, illum quidem!</p>
        </section>
    )
}
