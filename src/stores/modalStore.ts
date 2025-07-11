import { create } from 'zustand'
import type { User } from '@/components'

interface ModalStore {
  isOpen: boolean
  user: User | null
  openModal: (user: User) => void
  closeModal: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  user: null,
  openModal: (user: User) => set({ isOpen: true, user }),
  closeModal: () => set({ isOpen: false, user: null }),
})) 