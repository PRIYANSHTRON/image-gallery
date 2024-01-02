import { useState, useEffect } from 'react'
import Card from './components/Card'
import Loader from './components/Loader'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [term, setTerm] = useState('')

  const url = `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setImages(data.hits)
      console.log(images)
      setLoading(false)
    }
    fetchData()
  }, [])


  return (

    <div className=" max-w-[90%] mx-auto">
      <h1 className='text-3xl bg-sky-500 text-center p-4 m-3 font-bold text-white'>PixaBay Gallery</h1>
      {loading ? <Loader />
        :<div className="grid sm:grid-cols-3 gap-4 justify-center p-5">
          {images.map((image) => {
            return <Card key={image.id} img_url={image.webformatURL} likes={image.likes} downloads={image.downloads} views={image.views} user={image.user } />
          })}
        </div>
      }
    </div>

  )
}

export default App
