interface FilterInterface {
    join: any;
    where: any;
    whereNot: any;
    whereIn: any;
    like: any;
    orLike: any;
    group: any;
    order: any;
    page: number;
    size: number;
}

export default FilterInterface;
