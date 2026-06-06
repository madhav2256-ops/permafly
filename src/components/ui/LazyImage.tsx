interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
}

export function LazyImage({ src, alt, width, height, priority = false, className }: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  )
}
