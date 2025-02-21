import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { unauthorizedError } from "@/erros/unauthorizedRrror";
import { HomeRepository } from "@/repositories/homeRepository";

async function HomeGet(userId: number) {
    const home = await HomeRepository.HomeGet(userId);
    if (!home) {
        throw invalidCredentialsError("Nenhum dado encontrado");
    }

    return home;
}

async function MonthPost(name: string, totalFunds: number, userId: number) {
    const user = await HomeRepository.UserExists(userId)
    if(!user){
        throw unauthorizedError()
    }
    const homeMonth = await HomeRepository.MonthPost(name, totalFunds, userId);
    return homeMonth
}

export const HomeService = {
    HomeGet, MonthPost
};