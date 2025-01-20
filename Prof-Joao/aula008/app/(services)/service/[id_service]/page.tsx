import Srv1 from "../../../components/service1";
import Srv2 from "../../../components/service2";
import Srv3 from "../../../components/service3";

type ServicesProps = {
    params: Promise<{
        id_service: string;
    }>;
};

const Services = async ({ params }: ServicesProps) => {
    // Aguarde a resolução de `params`
    const { id_service } = await params;

    // Converta para número
    const idService = parseInt(id_service, 10);

    // Array de componentes
    const components = [
        <Srv1 key="1" />,
        <Srv2 key="2" />,
        <Srv3 key="3" />
    ];

    // Verifique se o índice é válido
    const ComponentToRender = components[idService - 1] || (
        <p>Serviço não encontrado</p>
    );

    return <>{ComponentToRender}</>;
};

export default Services;
