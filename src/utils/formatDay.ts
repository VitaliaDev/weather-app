// Translate the day name using i18next
export const formatDay = (timestamp: number, t: (key: string) => string): string => {
    const weekday = new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    return t(weekday); 
  };
  