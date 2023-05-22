export interface IImagesList{
    img: string,
};

export interface IColorList {
    color: string,
};

export interface ICharacteristicsList{
    manufacturer: string,
    material: string,
    weight: string,
    size: string,
    country: string,
    img: string[],
    guarantee: string,
    color: IColorList[],
};

export interface ISkateboardList {
    id?: number,
    category: string,
    name: string,
    description: string,
    characteristics: ICharacteristicsList[],
    price: number,
};