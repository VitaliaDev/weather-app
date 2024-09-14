//  Formats a Unix timestamp into a time string in "HH:MM" format.
export const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  