const sorting = require("../../app"); // Импортируем функцию

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Sorting is not necessary", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
