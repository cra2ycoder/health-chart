
export const fetcher = (url) => fetch(url).then((res) => res.json());
export const formatNumber = (num) => num >= 10 ? num : `0` + num