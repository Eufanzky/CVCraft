import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt }) => {
  return (
    <div className="w-auto h-auto border mx-2">
      <figure className="border-2 border-blue-950 shadow-lg">
        <Image src={src} alt={alt} width={350} height={800} />
      </figure>
    </div>
  );
};

export default ImagePreview;
