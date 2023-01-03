import axios from "axios";
import { isNumberObject } from "util/types";
import { CustomError } from "../errors/CustomErrors";
import api from "../utils/url";


export class UserBusiness {
    public getUsers =async () => {
        try {
            const data = await api.get(`/users?per_page=20`)

            const users = data.data;
            const urlNextPage = await api.get(`${data.request.path}`);

            const link = urlNextPage.headers.link
            const [, match] = link?.match(/(\S+) /) || [];
            const nextPage = match.replace('<', '').replace('>;', '')

            return {nextPage, users};
            
        } catch (error: any) {
            throw new CustomError(error.code, error.message)
        }
    }

    public getUsersSince = async (input: number): Promise<any>  => {
        try {
            const since = input;

            if (!since) {
                throw new CustomError(
                    400,
                    'Required field'
                );
            };

            if (!isNaN(since)) {
                throw new Error(
                  'Fill in the field with a number'
                );
            };

            const data = await api.get(`/users?since=${since}&per_page=20`);

            const users = data.data;
            const urlNextPage = await api.get(`${data.request.path}`);

            const link = urlNextPage.headers.link
            const [, match] = link?.match(/(\S+) /) || [];
            const nextPage = match.replace('<', '').replace('>;', '')

            return {nextPage, users};

        } catch (error: any) {
            throw new CustomError(error.code, error.message)
        };
    };

    public getUserDetail = async (username: string) => {
        try {
            if (!username) {
                throw new CustomError(
                    400,
                    'Required field'
                );
            };

            const data = await api.get(`users/${username}`)

            return data.data;
        } catch (error: any) {
            throw new CustomError(error.code, error.message)
        }
    }

    public getUserRepos = async (username: string) => {
        try {
            if (!username) {
                throw new CustomError(
                    400,
                    'Required field'
                );
            };

            const data = await api.get(`users/${username}/repos`)

            return data.data;
        } catch (error: any) {
            throw new CustomError(error.code, error.message)
        }
    }
};
