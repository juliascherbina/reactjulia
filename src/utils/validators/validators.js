



export const required = value => {
    if (value) return undefined;
    return 'Field is required'
}

export const MaxLengthCreator = (MaxLength) => (value) => {
        if (value.length > MaxLength) return `max Length is ${MaxLength} symbols`;
        return undefined
    }

//Вище написан thunk для того щоб функція була універсальна
// і могла примінятися на будь-яку довжину символів!
// export const maxLength30 = value => {
//     if (value.lenght > 30) return 'max Length is 30 symbols';
//     return undefined
// }