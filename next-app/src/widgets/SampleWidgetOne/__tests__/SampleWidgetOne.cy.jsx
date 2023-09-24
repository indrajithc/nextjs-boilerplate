import React from "react";
import SampleWidgetOne from "@widgets/SampleWidgetOne";

const defaultProps = {
  configuration: {},
  payload: {},
};

describe("SampleWidgetOne", () => {
  /** Function is used to mount the component */
  const mountComponent = (props) => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className="">
        <SampleWidgetOne {...props} />
      </div>
    );
  };

  // TOTO
  it("Initial render", () => {
    mountComponent({ ...defaultProps });
  });

  context("Samsung-s10 resolution", () => {
    beforeEach(() => {
      cy.viewport("samsung-s10");
    });

    it("Mobile menu", () => {
      mountComponent({ ...defaultProps });
    });
  });
});
