import { useEffect, useState } from 'react'

const GetDatas = () => {
  let [datas, setDatas] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/data/datas.json')
        .then((res) => res.json())
        .then((datas) => setDatas(datas))
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  return datas
}

export default GetDatas
