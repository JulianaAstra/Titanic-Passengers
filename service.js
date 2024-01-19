import { calculateAgeInMonths } from "./convert-age.js";

let originalTableHTML;

export const fetchData = async () => {

    const url = 'https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      const dataSliced = data.slice(0, 100);
      const transformedData = dataSliced.map(passenger => {
        return {
          ...passenger,
          age: passenger.age >= 1 ? `${Math.floor(passenger.age)}y` : `${calculateAgeInMonths(passenger.age)}months`,
          survived: passenger.survived ? 'SURVIVED' : 'NOT SURVIVED',
          gender: passenger.gender === 'female' ? 'F' : passenger.gender === 'male' ? 'M' : passenger.gender,
          cabin: `cabin: ${passenger.cabin}`,
          ticket: `ticket: ${passenger.ticket}`,
        };
      });

      return transformedData;
      
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };
  
  export const saveOriginalTableHTML = (tableBodyHTML) => {
    if (!originalTableHTML) {
      originalTableHTML = tableBodyHTML;
    }
  };