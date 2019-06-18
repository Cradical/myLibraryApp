import React from "react";
import { shallow } from "enzyme";
import BookCard from "components/BookCard";

let wrapper, books;

beforeEach(() => {
  books = [
    {
      id: 1,
      author: "Jordan Peterson",
      bookSummary: "This is a quick summary of the book",
      genre: "Psychology/Self Improvement",
      haveRead: false,
      imageLink: "https://some-image.com",
      language: "English",
      link: "https://www.jordanbpeterson.com/12-rules-for-life/",
      pages: 315,
      recommendable: true,
      subtitle: "Antidote to Chaos",
      title: "12 Rules For Life",
      year: 2017
    }
  ];

  wrapper = shallow(<BookCard books={books} />);
});

describe("<BookCard />", () => {
  it("renders with a book image", () => {
    expect(wrapper.find("CardImg").prop("alt")).toBe(
      "Book cover of 12 Rules For Life"
    );
    expect(wrapper.find("CardImg").prop("src")).toBe("https://some-image.com");
  });

  it("renders a Book Title", () => {
    expect(
      wrapper
        .find("CardTitle")
        .shallow()
        .text()
    ).toEqual("12 Rules For Life");
  });

  it("renders a subtitle", () => {
    expect(
      wrapper
        .find("CardSubtitle")
        .dive()
        .text()
    ).toEqual("Antidote to Chaos");
  });

  it("renders with a book summary", () => {
    expect(
      wrapper
        .find("CardText")
        .dive()
        .text()
    ).toEqual("This is a quick summary of the book");
  });

  it("has a clickable button", () => {
    expect(wrapper.find("Button").exists()).toEqual(true);
    expect(wrapper.find("Button").simulate("click"));
  });
});
