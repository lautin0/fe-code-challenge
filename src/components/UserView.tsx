import { useUser } from "@/hooks"
import { LoadingSkeleton, UserCard, type User } from "@/components"

export const UserView = () => {
  const { data: users, isLoading } = useUser()
  return (
    <div className="flex flex-wrap max-w-[1080px] gap-y-6 justify-center">
      {isLoading ? <LoadingSkeleton /> : users?.data?.users?.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}