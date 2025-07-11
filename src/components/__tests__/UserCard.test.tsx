import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { UserCard } from '../UserCard'
import { useModalStore } from '@/stores/modalStore'

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

describe('UserCard', () => {
  const mockOpenModal = vi.fn()

  beforeEach(() => {
    vi.mocked(useModalStore).mockReturnValue({
      openModal: mockOpenModal
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders user information correctly', () => {
    render(<UserCard user={mockUser} />)

    expect(screen.getByText('A passionate developer with 5 years of experience.')).toBeInTheDocument()
    expect(screen.getByAltText('John')).toHaveAttribute('src', 'https://example.com/avatar.jpg')
  })

  it('opens modal when View More button is clicked', () => {
    render(<UserCard user={mockUser} />)

    const viewMoreButton = screen.getByText('View More')
    fireEvent.click(viewMoreButton)

    expect(mockOpenModal).toHaveBeenCalledWith(mockUser)
  })

  it('renders View More button', () => {
    render(<UserCard user={mockUser} />)

    expect(screen.getByRole('button', { name: 'View More' })).toBeInTheDocument()
  })
}) 