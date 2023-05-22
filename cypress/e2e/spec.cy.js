import ATPracticePage from "../pageObjects/atpractice.page";

var data = {
  name: "John Deer",
  email: "johndeer@gmail.com",
  gender: "Male",
  mobile: "123456789",
  date_of_birth: "28 February,1930",
  subjects: "Economics",
  hobbies: "Music",
  picture: "dog.webp",
  address: "Valmiera Valmieras iela 12",
  state_and_city: "NCR Delhi",
};

describe("Automation Practice", () => {
  beforeEach(() => {
    ATPracticePage.visit();
  });
  it("main test", () => {
    ATPracticePage.DOBField.click();
    ATPracticePage.DatePickerMonthDropDown.select(
      data.date_of_birth.split(" ")[1].split(",")[0]
    );
    ATPracticePage.DatePickerYearDropDown.select(
      data.date_of_birth.split(" ")[1].split(",")[1]
    );
    ATPracticePage.DatePickerDateList.contains(
      data.date_of_birth.split(" ")[0]
    ).click();
    ATPracticePage.SubjectField.type(data.subjects + "{enter}");
    ATPracticePage.HobbyList.contains(data.hobbies).click();
    ATPracticePage.FirstNameField.type(data.name.split(" ")[0]);
    ATPracticePage.LastNameField.type(data.name.split(" ")[1]);
    ATPracticePage.EmailField.type(data.email);
    ATPracticePage.GenderList.contains(data.gender).click();
    ATPracticePage.MobileField.type(123456789);
    ATPracticePage.AddresField.type(data.address);
    ATPracticePage.UploadFile.selectFile("cypress/files/" + data.picture);
    ATPracticePage.StateClickable.click();
    ATPracticePage.StateSelect.type(
      data.state_and_city.split(" ")[0] + "{enter}"
    );
    ATPracticePage.CityClickable.click();
    ATPracticePage.CitySelect.type(
      data.state_and_city.split(" ")[1] + "{enter}"
    );
    ATPracticePage.SubmitButton.click();
    ATPracticePage.ResultTableRow.each((item) => {
      var children = item.children();
      var itemID = children[0].textContent
        .toLocaleLowerCase()
        .replace("student", "")
        .trim()
        .replaceAll(" ", "_");
      cy.wrap(children[1]).should("have.text", data[itemID]);
    });
  });
});
