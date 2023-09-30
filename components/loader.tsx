import Image from 'next/image'

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/logo.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">Creator is thinking...</p>
    </div>
  )
}
