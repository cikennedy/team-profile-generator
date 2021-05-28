const { ExpectationFailed } = require('http-errors');
const { iteratee } = require('lodash');
const Employee = require('../lib/Employee');

// Example Test Below, rework this 
describe("function name", () => {
    it("does this", () => {
        const employee = new Employee("John");

        ExpectationFailed(employee.letters).toEqual(
            expect.arrayContaining([expect.objectContaining({ char: "J"})])
        );

        expect(employee.letters[0]).toBeInstanceOf(Employee);
    });
})