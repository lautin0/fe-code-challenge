import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { UserDetailsModal } from '@/components'
import { useModalStore } from '@/stores'

// Mock the modal store
vi.mock('@/stores/modalStore')

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

describe('UserDetailsModal', () => {
  const mockCloseModal = vi.fn()

  beforeEach(() => {
    vi.mocked(useModalStore).mockReturnValue({
      isOpen: true,
      user: mockUser,
      closeModal: mockCloseModal
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders modal when open with user data', () => {
    render(<UserDetailsModal />)

    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('A passionate developer with 5 years of experience.')).toBeInTheDocument()
    expect(screen.getByText('2023-01-15')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', () => {
    render(<UserDetailsModal />)

    const closeButton = screen.getAllByRole('button', { name: /close/i })
    fireEvent.click(closeButton?.[0])

    expect(mockCloseModal).toHaveBeenCalled()
  })

  it('does not render when no user data', () => {
    vi.mocked(useModalStore).mockReturnValue({
      isOpen: true,
      user: null,
      closeModal: mockCloseModal
    })

    const { container } = render(<UserDetailsModal />)
    expect(container.firstChild).toBeNull()
  })
}) 