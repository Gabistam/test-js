import Pagination from './index';

describe ('Pagination Unit Test Suites', () => {
    it('Should return something', () => {
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
})

    it('Should return "0"', () => {
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    })

    it('Should return 1 page', () => {
        expect(Pagination.getNumberOfPages(7)).toBeLessThan(2);
    })

    it('Should return 5 pages', () => {
        expect(Pagination.getNumberOfPages(34)).toEqual(5);
    })
})