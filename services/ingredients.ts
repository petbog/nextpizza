import { ApiRoutes } from "./constanse"
import { axiosInstance } from "./instance"
import { Ingredients } from "@prisma/client"



export const getAll = async ():Promise<Ingredients[]> => {
    const { data } = await axiosInstance.get<Ingredients[]>(ApiRoutes.INGREDIENTS)
    return data
}