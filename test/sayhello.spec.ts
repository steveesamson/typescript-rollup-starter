import sayHello from "../src/lib/sayhello";

describe("SayHello Tests", () => {
  it("Expects sayHello with no parameters to return 'Hello world'", () => {
    const expectResult = "Hello world";
    const actualResult = sayHello();
    expect(actualResult).toBe(expectResult);
  });

  it("Expects sayHello with 'Steve' as parameter to return 'Hello Steve'", () => {
    const expectResult = "Hello Steve";
    const actualResult = sayHello("Steve");
    expect(actualResult).toBe(expectResult);
  });
});
