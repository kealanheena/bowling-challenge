describe("Bowling", () => {
  var game;

  beforeEach(() => {
    game = new Game();
  });

  it("should add the points to total score", () => {
    game.add(5)

    expect(game.points).toEqual(5);
  });

  it("should switch turn after calculating the points twice", () => {
    game.add(2);
    game.add(5);

    expect(game.frame).toEqual(2);
  });

  it("should default all points to zero and frame back to one after being reset", () => {
    game.reset();

    expect(game.points).toEqual(0);
    expect(game.frame).toEqual(1);
  });

  it("should change your roll to 2 after entering a score", () => {
    game.add(6);

    expect(game.roll).toEqual(2);
  });
});