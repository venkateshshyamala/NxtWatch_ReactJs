import {Link} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'

import {
  ListItem,
  VideoImage,
  CardContainer,
  Profile,
  Card,
  Heading,
  DetailsContainer,
  Details,
} from './styledComponents'

import './index.css'

const GameVideoItem = props => {
  const {itemDetails} = props
  const {id, thumbnailUrl, title, viewCount} = itemDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <>
            <ListItem>
              <Link to={`videos/${id}`} className="link-item">
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <CardContainer>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Card>
                    <Heading isDark={isDark}>{title}</Heading>
                    <DetailsContainer>
                      <Details>{viewCount}</Details>
                      <Details>Watching Worldwide</Details>
                    </DetailsContainer>
                  </Card>
                </CardContainer>
              </Link>
            </ListItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GameVideoItem
