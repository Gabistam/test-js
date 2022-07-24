import { retrieveSensorsDetailsData } from ".index/";

describe("retrieveSensorsDetailsData Unit Test Suites", () => {
    it('Should return defined', () => {
        expect(retrieveSensorsDetailsData()).toBeDefined();
    })
});