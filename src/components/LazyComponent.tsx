import { lazy, Suspense } from 'react'

interface LazyComponentProps {
  fallback?: React.ReactNode
  children: React.ReactNode
}

export const LazyComponent = ({ fallback = <div>Loading...</div>, children }: LazyComponentProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

export const LazyUserDetailsModal = lazy(() =>
  import('@/components/Modal').then(module => ({ default: module.UserDetailsModal }))
) 