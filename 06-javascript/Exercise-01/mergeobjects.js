const defaults = { theme: 'light', notifications: true, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 16 };

const finalSettings = { ...defaults, ...userPrefs, timestamp: new Date() };

console.log(finalSettings);
