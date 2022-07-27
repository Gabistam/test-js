import { retrieveSensorsDetailsData } from ".";
import { data } from "../../../../data/mock-facade-detail-data.js";


describe("sensorsDetails Unit Test Suites", () => {
    it('Should return the mocked data', () => {
        expect(retrieveSensorsDetailsData()).toBe(data.facade)
    })
});