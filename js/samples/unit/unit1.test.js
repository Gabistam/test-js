import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () =>{
    it('Should return "Hello, World"', () => {
      expect(sayHello()).not.toBe("Hello");
    });

    it('Should return "Hello, Stam"', () => {
        expect(sayHello("Stam")).toBe("Hello, Stam")
    })
})