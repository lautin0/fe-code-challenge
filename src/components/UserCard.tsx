import React from "react"
import type { User } from "@/components"
import { useModalStore } from "@/stores"

export const UserCard = React.memo(({ user }: { user: User }) => {
  const { openModal } = useModalStore()

  const handleViewMore = () => {
    openModal(user)
  }

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col items-center w-full max-w-xs mx-auto">
      <div className="min-h-[150px] bg-blue-600 w-full flex flex-col items-center pt-6 pb-4 rounded-bl-3xl rounded-t-3xl">
        <div className="w-24 h-24 rounded-full border-1 border-white flex items-center justify-center bg-white -mb-12 z-10">
          <img
            className="w-23 h-23 rounded-full object-cover inset-ring-2 inset-ring-blue-600"
            src={user.avatar}
            alt={user.firstname}
          />
        </div>
      </div>
      <div className="bg-blue-600 w-full">
        <div className="bg-white pt-6 pb-6 px-6 flex flex-col items-center max-h-60 rounded-tr-3xl">
          <h2 className="text-black text-lg font-semibold mb-2">{user.firstname} {user.lastname}</h2>
          <p className="text-gray-500 text-center mb-4 text-ellipsis line-clamp-3 min-h-[70px]">
            {user.description}
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  )
})