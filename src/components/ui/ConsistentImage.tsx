import Image from 'next/image';

type AspectRatio = 'hero' | '16:9' | '4:3' | '3:4' | '1:1' | '21:9';

const ASPECT_RATIOS: Record<AspectRatio, string> = {
  hero: 'aspect-[16/9]',
  '16:9': 'aspect-[16/9]',
  '4:3': 'aspect-[4/3]',
  '3:4': 'aspect-[3/4]',
  '1:1': 'aspect-square',
  '21:9': 'aspect-[21/9]',
};

interface ConsistentImageProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  rounded?: boolean;
  hoverScale?: boolean;
}

export function ConsistentImage({
  src,
  alt,
  aspectRatio = '4:3',
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  objectPosition = 'center',
  rounded = true,
  hoverScale = false,
}: ConsistentImageProps) {
  return (
    <div className={`relative overflow-hidden ${ASPECT_RATIOS[aspectRatio]} ${rounded ? 'rounded-xl' : ''} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${hoverScale ? 'transition-transform duration-700 group-hover:scale-[1.03]' : ''}`}
        style={{ objectPosition }}
        sizes={sizes}
      />
    </div>
  );
}
