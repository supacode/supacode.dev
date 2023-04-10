import Image, { StaticImageData } from 'next/image';

type AppImageProps = {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  className?: string;
  width?: number | undefined;
  height?: number | undefined;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  quality?: number;
  loading?: 'eager' | 'lazy';
  placeholder?: 'blur' | 'empty';
  style?: React.CSSProperties;
  blurDataURL?: string;
};

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  title,
  className,
  width,
  height,
  priority,
  quality,
  style,
  loading,
  placeholder,
  blurDataURL,
}) => (
  <Image
    src={src}
    style={style}
    alt={alt}
    title={title}
    className={className}
    width={width}
    height={height}
    priority={priority}
    quality={quality}
    loading={loading}
    placeholder={placeholder}
    blurDataURL={blurDataURL}
  />
);

AppImage.displayName = 'components/AppImage';
