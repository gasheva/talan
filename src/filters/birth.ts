export enum Locale {RU = 'ru-Ru'}

export function dateToLocale(value: Date, locale: Locale): string {
    switch (locale) {
        case Locale.RU:
            return new Intl.DateTimeFormat(locale).format(new Date(value));
        default:
            return value.toString();
    }
}