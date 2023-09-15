import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import PrimaryButton from "./PrimaryButton";

describe("Running Test for Primary Button", () => {

  test("Check Button Disabled", () => {
    render(<PrimaryButton text="Primary Button" disabled/>)
    expect(screen.getByRole('button',{name:"Primary Button"})).toBeDisabled();
  });
});