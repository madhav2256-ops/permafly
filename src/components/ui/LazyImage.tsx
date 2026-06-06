interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function LazyImage({ src, alt, width, height, priority = false, className, fetchPriority }: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={fetchPriority || (priority ? 'high' : undefined)}
      className={className}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  )
}

