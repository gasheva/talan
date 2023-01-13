export interface UserServer{
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    date_of_birth: Date;
}

export interface User{
    id: number;
    avatar: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: Date;
}

export const userServerFrontAdapter = (userFromServer: UserServer)=>{
    return {...userFromServer, firstName: userFromServer.first_name, lastName: userFromServer.last_name, phoneNumber: userFromServer.phone_number, dateOfBirth: userFromServer.date_of_birth}
}
export const userFrontServerAdapter = (user: User)=>{
    return {...user, first_name: user.firstName, last_name: user.lastName, phone_number: user.phoneNumber, date_of_birth: user.dateOfBirth}
}