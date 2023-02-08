interface IPage {
  pageCount: number;
  pageRange: number;
  marginPages: number;
}

class Page implements IPage {
  pageCount: number;
  pageRange: number;
  marginPages: number;

  constructor(pageCount: number, pageRange: number, marginPages: number) {
    this.pageCount = pageCount;
    this.pageRange = pageRange;
    this.marginPages = marginPages;
  }
}
export default Page;
