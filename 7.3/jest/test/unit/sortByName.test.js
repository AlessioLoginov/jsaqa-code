const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should sort names with different cases", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "гАРРИ пОТТЕР", "ГАРРИ ПОТТЕР"])
    ).toEqual(["Гарри Поттер", "гАРРИ пОТТЕР", "ГАРРИ ПОТТЕР"]);
  });

  it("Should sort names that start with the same letters but different cases", () => {
    expect(
      sorting.sortByName(["Властелин Колец", "властелин Колец", "Властелин колец"])
    ).toEqual(["Властелин Колец", "властелин Колец", "Властелин колец"]);
  });

  it("Should handle names that are exactly the same but with different cases", () => {
    expect(
      sorting.sortByName(["Волшебник изумрудного города", "ВОЛШЕБНИК ИЗУМРУДНОГО ГОРОДА", "ВОЛШЕБНИК ИЗУМРУДНОГО ГОРОДА"])
    ).toEqual(["Волшебник изумрудного города", "ВОЛШЕБНИК ИЗУМРУДНОГО ГОРОДА", "ВОЛШЕБНИК ИЗУМРУДНОГО ГОРОДА"]);
  });

  it("Should handle an empty array", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Should handle an array with a single element", () => {
    expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
  });
});


