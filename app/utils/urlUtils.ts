export const extractIdFromUrl = (url: string): string => {
  const idPattern = /\/([0-9]+)\/$/;
  const match = url.match(idPattern);
  return match ? match[1] : '';
};
