import { calculateAgeInMonths } from "./convert-age.js";
import { BASE_URL } from "./constants.js";

export const fetchData = async () => {

  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    const transformedData = data.map(passenger => {
      return {
        name: passenger.name,
        age: passenger.age >= 1 ? `${Math.floor(passenger.age)}y` : `${calculateAgeInMonths(passenger.age)}months`,
        survived: passenger.survived ? 'SURVIVED' : 'NOT SURVIVED',
        gender: passenger.gender === 'female' ? 'F' : passenger.gender === 'male' ? 'M' : passenger.gender,
        cabin: `cabin: ${passenger.cabin}`,
        ticket: `ticket: ${passenger.ticket}`,
      };
    });

    return transformedData;
    
  } catch (error) {
    throw error;
  }
};
