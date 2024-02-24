export const generateRandomUsername = () => {
  const prefixes = ['user', 'client', 'customer', 'member', 'participant'];
  const suffixes = ['123', '007', '42', '2024', 'X', 'Z'];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  const randomNumber = Math.floor(Math.random() * 1000); // Random number between 0 and 999

  return `${randomPrefix}${randomNumber}${randomSuffix}`;
};
