export const getFetcher = url => fetch(url).then(res => res.json())

export const formatNumber = num => (num >= 10 ? num : `0` + num)

export const getCurrentDate = () => {
  const curDate = new Date()
  const [day, month, year] = curDate.toLocaleDateString().split('/')
  const time = curDate.toLocaleTimeString()
  return { day, month, year, time }
}
