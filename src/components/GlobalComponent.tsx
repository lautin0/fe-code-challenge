import { LazyComponent, LazyUserDetailsModal } from '@/components'

export const GlobalComponent = () => {
  return <LazyComponent fallback={<div>Loading modal...</div>}>
    <LazyUserDetailsModal />
  </LazyComponent>
}