import Image, { StaticImageData } from 'next/image';

type AppImageProps = {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  quality?: number;
  loading?: 'eager' | 'lazy';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
};

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  title,
  className,
  width,
  height,
  layout = 'fill',
  objectFit,
  priority,
  quality,
  loading,
  placeholder,
  blurDataURL,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      className={className}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      priority={priority}
      quality={quality}
      loading={loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
};
