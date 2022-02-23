const fetchDatas = async () => {
  const datas = await fetch('/data/datas.json')
    .then((res) => res.json())
    .then((data) => data)
  console.log(datas)
  return datas
}
export default fetchDatas

// const GetDatas = () => {
//   let [datas, setDatas] = useState([])
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetch('/data/datas.json')
//         .then((res) => res.json())
//         .then((datas) => setDatas(datas))
//     }, 100)
//     return () => clearTimeout(timer)
//   }, [])
//   return datas
// }

// export default GetDatas
