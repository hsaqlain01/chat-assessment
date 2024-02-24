export const useTimeFormatter = (timestamp: string) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return formattedTime;
};
