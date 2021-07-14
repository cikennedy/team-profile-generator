const Intern = require('../lib/Intern');

test("getSchool) test - this should return a school", () => {
    const testValue = "University of Illinois";
    const e = new Intern("Greg", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() test - this should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Greg", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});