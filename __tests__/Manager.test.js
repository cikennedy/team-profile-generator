const Manager = require('../lib/Manager');

test("getOffice() test - this should return an office number", () => {
    const testValue = 12;
    const e = new Manager("Greg", 1, "test@email.com", testValue);
    expect(e.getOffice()).toBe(testValue);
});

test("getRole() test - this should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Greg", 1, "test@email.com", 12);
    expect(e.getRole()).toBe(testValue);
});