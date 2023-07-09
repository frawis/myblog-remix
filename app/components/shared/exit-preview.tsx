const ExitPreview = () => {
  return (
    <div className="pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center">
      <form
        className="pointer-events-auto"
        action="/resource/preview"
        method="post"
      >
        <button type="submit" className="bg-black p-4 font-bold text-white">
          Exit Preview
        </button>
      </form>
    </div>
  )
}

export { ExitPreview }
