import { useEffect, useState } from 'react'

const GetDatas = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/data/datas.json')
        .then((res) => res.json())
        .then((datas) => setDatas(datas))
    }, 10)
    return () => clearTimeout(timer)
  }, [])
  let [datas, setDatas] = useState([])
  return datas
}

export default GetDatas
