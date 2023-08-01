/*
 * Copyright(c) 2023 Mozanta Technologies Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Mozanta ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Mozanta.
 *
 * @author Indrajith C
 */

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
