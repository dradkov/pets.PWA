interface IPaginationFilter{
    pageNumber: number;
    pageSize: number;
}

class PaginationFilter implements IPaginationFilter{
    pageNumber: number;
    pageSize: number;
    constructor(pageNumber: number, pageSize: number) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
}

export default PaginationFilter;