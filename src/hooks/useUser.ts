import { useQuery } from "@tanstack/react-query"
import { USER_API_URL } from "@/constants/data"
import { fetcher } from "@/utils"

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetcher(USER_API_URL),
  })
}