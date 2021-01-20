interface Props {
    src: string,
    alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} />
    );
}

export default Image;
