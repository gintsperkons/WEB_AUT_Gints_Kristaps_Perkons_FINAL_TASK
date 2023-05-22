import BasePage from "./base.page";

class ATPracticePage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get FirstNameField() {
    return cy.get("#firstName");
  }
  static get LastNameField() {
    return cy.get("#lastName");
  }
  static get EmailField() {
    return cy.get("#userEmail");
  }
  static get GenderList() {
    return cy.get(".custom-radio > label");
  }
  static get MobileField() {
    return cy.get("#userNumber");
  }
  static get AddresField() {
    return cy.get("#currentAddress");
  }

  static get DOBField() {
    return cy.get("#dateOfBirthInput");
  }
  static get DatePickerMonthDropDown() {
    return cy.get(".react-datepicker__month-select");
  }
  static get DatePickerYearDropDown() {
    return cy.get(".react-datepicker__year-select");
  }
  static get DatePickerDateList() {
    return cy.get(
      ".react-datepicker__day:not(.react-datepicker__day--outside-month)"
    );
  }
  static get SubjectField() {
    return cy.get("#subjectsInput");
  }
  static get HobbyList() {
    return cy.get(".custom-checkbox > label");
  }
  static get UploadFile() {
    return cy.get("#uploadPicture");
  }

  static get StateClickable() {
    return cy.get("#state");
  }
  static get CityClickable() {
    return cy.get("#city");
  }
  static get StateSelect() {
    return cy.get("#react-select-3-input");
  }
  static get CitySelect() {
    return cy.get("#react-select-4-input");
  }
  static get SubmitButton() {
    return cy.get("#submit");
  }
  static get ResultTableRow() {
    return cy.get("tbody > tr");
  }
}
export default ATPracticePage;
