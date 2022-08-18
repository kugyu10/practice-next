import { useEffect, useState } from "react"


/* APIを利用する例 */
function Sayhello(){
  
  const [data, setData] = useState({
    name: ''
  })

  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile)
      })
  }, [])

  return <div>hello {data.name}</div>
}

export default Sayhello