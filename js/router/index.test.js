/**
 *@jest-environnement jsdom
 */
import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from "./index";

describes("Router Integration Unit Test Suites", () => {
  it("Should render the Sign In Page", async () => {
    document.body.innerHTML = `<div id="root"></div>;`;
    document.location = "/";
    await router();
    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  it("Should render the Home page", async () => {
    document.body.innerHTML = <div id="root"></div>;
    document.location = "/#/home";
    await router();
    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  it("Should render the Facade-details page", async () => {
    document.body.innerHTML = <div id="root"></div>;
    document.location = "/#/facade-details";
    await router();
    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur"
    );
  });

  it("Should render the AddSensor Page", async () => {
    document.body.innerHTML = <div id="root"></div>;
    document.location = "/#/add-sensor";
    await router();
    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });
});
