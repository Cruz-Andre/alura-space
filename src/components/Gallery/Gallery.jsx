import photos from './fotos.json'
import Tags from 'components/Tags/Tags'
import Cards from './Cards/Cards'

import styles from './Gallery.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Gallery({ typed }) {
  const [photosObj, setPhotosObj] = useState(photos)

  // um array só com as tags e sem repetição de tags. Usando 'spread operator' e 'new Set'
  const tags = [...new Set(photos.map(photo => photo.tag))]

  // // Um array só com as tags
  // const tags = photos.map(photo => photo.tag)
  // // Filtrar o array para retornar só valores distintos
  // const tagsUnicas = tags.filter((tag, index) => tags.indexOf(tag) === index)
  // console.log(tagsUnicas)

  

  const photosFilter = (tag) => {
    const photosFiltered = photos.filter(photo => photo.tag === tag)
    setPhotosObj(photosFiltered)
  }

  useEffect(() => {
    const searching = (text) => {
      const regex = new RegExp(typed, 'i')
      return regex.test(text)
    }
    const newPhotosObj = photos.filter(photo => searching(photo.titulo))

    setPhotosObj(newPhotosObj)

  }, [typed])

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} photosFilter={photosFilter} setPhotosObj={setPhotosObj} />
      <Cards photos={photosObj} />
    </section>
  )
}