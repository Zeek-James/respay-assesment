import React, { useState } from "react";
import { AddProperty } from "./AddProperty";
import { PropertyImages } from "./PropertyImages";
import { Success } from "./Success";

export const NewPropertyForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleOnChange = (details) => {};

  switch (step) {
    case 1:
      return (
        <AddProperty
          nextStep={nextStep}
            handleOnChange={handleOnChange}
        />
      );
    case 2:
      return (
        <PropertyImages
          prevStep={prevStep}
          nextStep={nextStep}
            handleOnChange={handleOnChange}
        />
      );
    case 3:
      return <Success />;
    default:
      return;
  }
};
