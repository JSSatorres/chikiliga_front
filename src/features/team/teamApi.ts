import { apiUrl } from '@/shared/config'
import playersData from './teamMooc.json'

export const fetchTeam = async () => {
  try {
    const response = await fetch(`${apiUrl}/team`)
    if (!response.ok) throw new Error('Failed to fetch data from API')

    const data = await response.json()
    return data.length > 0 ? data : playersData
  } catch (error) {
    console.error('Error fetching data:', error)
    return playersData
  }
}
