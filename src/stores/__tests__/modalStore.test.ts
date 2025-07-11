import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useModalStore } from '../modalStore'

const mockUser = {
  id: '1',
  username: 'johndoe',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  role: 'Developer',
  join_date: '2023-01-15',
  description: 'A passionate developer with 5 years of experience.',
  avatar: 'https://example.com/avatar.jpg'
}

describe('modalStore', () => {
  beforeEach(() => {
    // Reset store to initial state
    const { result } = renderHook(() => useModalStore())
    act(() => {
      result.current.closeModal()
    })
  })

  it('should have initial state', () => {
    const { result } = renderHook(() => useModalStore())

    expect(result.current.isOpen).toBe(false)
    expect(result.current.user).toBe(null)
  })

  it('should open modal with user data', () => {
    const { result } = renderHook(() => useModalStore())

    act(() => {
      result.current.openModal(mockUser)
    })

    expect(result.current.isOpen).toBe(true)
    expect(result.current.user).toEqual(mockUser)
  })

  it('should close modal', () => {
    const { result } = renderHook(() => useModalStore())

    // First open the modal
    act(() => {
      result.current.openModal(mockUser)
    })

    expect(result.current.isOpen).toBe(true)

    // Then close it
    act(() => {
      result.current.closeModal()
    })

    expect(result.current.isOpen).toBe(false)
    expect(result.current.user).toBe(null)
  })
}) 