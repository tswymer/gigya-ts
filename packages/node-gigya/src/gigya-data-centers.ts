import { GigyaDataCenter } from 'gigya-rest-api-types';

/**
 * This is a helper function to convert string union type to string array type.
 *
 * @see https://stackoverflow.com/a/70694878
 */
type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

const stringUnionToArray = <T>() => {
    return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) => elements;
};

/**
 * An array of all Gigya data centers, inferred from the GigyaDataCenter type.
 *
 * Useful for input validation (ie "z.enum(GIGYA_DATA_CENTERS)").
 */
export const GIGYA_DATA_CENTERS = Object.freeze(
    stringUnionToArray<GigyaDataCenter>()(
        'au1.gigya.com',
        'cn1.sapcdm.cn',
        'eu1.gigya.com',
        'eu2.gigya.com',
        'global.gigya.com',
        'us1.gigya.com',
    ),
);
