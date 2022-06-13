export const fetchDatas = async () => {
  const datas = await fetch('/data/datas.json')
    .then((res) => res.json())
    .then((data) => data)
  return datas
}

export const fetchAccommodations = async (accommodationId) => {
  const datas = await fetchDatas()

  const accommodations = datas.accommodations.filter(
    (accommodation) => accommodation.id === accommodationId
  )

  return accommodations[0]
}
