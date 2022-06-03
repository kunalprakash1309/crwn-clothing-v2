import { useNavigate } from 'react-router-dom'

import { BackgroundImage, DirectoryItemContainer, Body } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category

  const navigate = useNavigate()
  const toggleNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={toggleNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem