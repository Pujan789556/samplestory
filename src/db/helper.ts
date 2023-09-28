export const parseData = (data: string): any => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
