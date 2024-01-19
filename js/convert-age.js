import { MONTHS_IN_YEAR } from "./constants.js";

export const calculateAgeInMonths = (ageInYears) => {

  const ageInMonths = Math.floor(ageInYears * MONTHS_IN_YEAR);
  return ageInMonths;
};
  
