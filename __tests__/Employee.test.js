const Employee = require('../lib/Employee');

test("getName() test", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("getID() test", () => {
    const testValue = 5;
    const e = new Employee("Greg", testValue);
    expect(e.getID()).toBe(testValue);
});