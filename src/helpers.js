import ISO6391 from 'iso-639-1';
// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
export const Language = (codIso = '') => {
  const lang = ISO6391.getName(codIso);
  const langOriginal = ISO6391.getNativeName(codIso);
  if (lang && langOriginal) {
    return { lang, langOriginal };
  }
  return 'Not Know';
};
export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};
