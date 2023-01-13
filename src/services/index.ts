import axios from 'axios';
import {User, UserServer, userServerFrontAdapter} from '@/interfaces/User';

const auth = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API
});

export async function fetchRandomAmountOfUsers(): Promise<User[]> {
    const getRandomNumber = (min: number, max: number): number => {
        return Math.floor(Math.random() * max) + min;
    };
    const resp = await auth.get('/users', {params: {size: getRandomNumber(1, 30)}});

    const users = <UserServer[]>resp.data;
    return users.map((user: UserServer) => {
        return userServerFrontAdapter(user);
    });

}