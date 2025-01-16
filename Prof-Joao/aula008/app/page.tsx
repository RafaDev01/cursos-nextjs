import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="home-wrapper">
        <h1 className="mb-3">Bem vindo a nossa empresa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi non aspernatur odit aut ullam rerum, earum ex, veniam accusamus inventore tempora officia libero enim nulla error deserunt, illum quidem!</p>
      </section>

      <section className="home-services">
        <h1 className="text-center mb-5">Conheça os nossos serviços</h1>
        <div className="text-center">
          <a href="#" className="services-button" target="_blank" rel="noopener noreferrer">Serviços</a>
        </div>
      </section>
    </>
  );
}
