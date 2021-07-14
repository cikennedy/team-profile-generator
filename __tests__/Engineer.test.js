const Engineer = require('../lib/Engineer');

test("getGithub() test - this should get a github username", () => {
    const testValue = "TestGitHubUserName";
    const e = new Engineer("Greg", 1, "test@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() test - this should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Greg", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});