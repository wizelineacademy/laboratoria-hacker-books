import Card from '../../card';
import Image from '../../image';

interface Props {
    url: string;
}

const Preview: React.FC<Props> = ({ url }) => {
    // TODO: implementar logica para obtener imagen y descripcion desde la url
    return (
        <Card color="white" withShadow={false}>
            <Image src={url} alt="video preview"/>
            <div>
                <p>
                    Labore quis ut proident sint. Irure ullamco cillum incididunt ea. Enim elit sit voluptate esse in sunt sit veniam. Dolore eu enim non cillum proident. Dolore quis ullamco commodo nisi reprehenderit elit sint. Elit incididunt deserunt reprehenderit proident id aliqua commodo ullamco.
                </p>
                <p>Dolore fugiat elit laboris incididunt Lorem excepteur. Fugiat voluptate dolor ex elit fugiat pariatur laboris voluptate. Et do culpa eiusmod duis officia pariatur amet adipisicing incididunt qui incididunt eiusmod sunt. Cupidatat qui ad elit eu incididunt proident ad nisi quis officia aute reprehenderit fugiat. Reprehenderit veniam dolore aliquip qui irure irure. Dolor nulla incididunt ut quis et. Incididunt labore veniam eu exercitation do reprehenderit nostrud amet exercitation Lorem anim.</p>
            </div>
        </Card>
    );
}

export default Preview;