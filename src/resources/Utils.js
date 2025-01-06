export function formatTimeDuration(timeYears, timeMonths) {
    let result = "(";
  
    if (timeYears > 1) {
      result += timeYears + " years";
    } else if (timeYears === 1) {
      result += timeYears + " year";
    }
  
    if (timeYears > 0 && timeMonths > 0) {
      result += ", ";
    }
  
    if (timeMonths > 1) {
      result += timeMonths + " months";
    } else if (timeMonths === 1) {
      result += timeMonths + " month";
    }
  
    result += ")";
    return result;
}