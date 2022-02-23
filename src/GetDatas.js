const fetchDatas = async () => {
  const datas = await fetch('/data/datas.json')
    .then((res) => res.json())
    .then((data) => data)
  return datas
}
export default fetchDatas
