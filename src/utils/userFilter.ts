import {User} from '@/interfaces/User';
import {dateToLocale} from '@/filters/birth';
import fullName from '@/filters/fullName';

export const filterUserByWord = (user: User, word: string): boolean => {
    if(!word) return true;
    const searchingWord = word.toLowerCase();
    return user.phoneNumber.toLowerCase().includes(searchingWord)
        || dateToLocale(user.dateOfBirth).includes(searchingWord)
        || fullName(user.lastName, user.firstName).toLowerCase().includes(searchingWord);
};