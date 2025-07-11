export const LoadingSkeleton = () => {
  return Array(3).fill('').map((_, i) => <div key={i} className="mx-6 w-70 h-80 max-w-sm rounded-3xl bg-gray-800 p-4">
    <div className="flex animate-pulse space-6 flex-col">
      <div className="size-20 mb-4 rounded-full bg-gray-200 self-center"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-4 rounded bg-gray-200"></div>
            <div className="col-span-1 h-4 rounded bg-gray-200"></div>
          </div>
          <div className="h-4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>)
}