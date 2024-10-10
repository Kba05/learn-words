import { TYPE_OF_FIELDS } from "../constants/constants";
import { IProfileField, User } from "../types/types";

export const formatPropertyName = (propertyName: string): string => {
    return propertyName
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const getArrayOfFields = (userField: User): IProfileField[] => {
    const arrOffields = []
    let key: keyof User
    for (key in userField) {
        const label = formatPropertyName(key)
        const type = TYPE_OF_FIELDS[key].type
        const controlEl = TYPE_OF_FIELDS[key].controlEl
        const data = userField
        const name = key
        arrOffields.push({ label, type, data, controlEl, name })
    }
    return arrOffields
}