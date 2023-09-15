import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import PrimaryButton from "./PrimaryButton";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<PrimaryButton text="Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });
});