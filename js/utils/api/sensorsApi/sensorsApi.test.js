import { retrieveSensorsData } from ".";
import { data } from "../../../../data/mock-homepage-data.js";


describe("sensorsApi Unit Test Suites", () => {
    it('Should return the mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    });
});