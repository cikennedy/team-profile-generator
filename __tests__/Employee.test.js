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

test("getEmail() test - this should get an email", () => {
    const testValue = "test@email.com";
    const e = new Employee("Greg", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() test - this should return Employee", () => {
    const testValue = "Employee";
    const e = new Employee("Greg", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});