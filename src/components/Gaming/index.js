import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../SideBar'
import FailureView from '../FailureView'
import GameVideoItem from '../GameVideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  AppContainer,
  BodyContainer,
  ResponsiveContainer,
  LoaderContainer,
  VideosListContainer,
  IconContainer,
  Heading,
  LinkItem,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
    console.log(this.props)
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = response.json()
      const updatedData = data.videos.map(each => ({
        channel: {
          name: '',
          profileImgUrl: '',
        },
        id: each.id,
        publishedAt: '',
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderVideos = () => {
    const {videosList} = this.props
    return (
      <VideosListContainer>
        {videosList.map(each => (
          <GameVideoItem key={each.id} itemDetails={each} />
        ))}
      </VideosListContainer>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.success:
        return this.renderVideos()

      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <AppContainer>
              <Header />
              <BodyContainer>
                <Sidebar />
                <ResponsiveContainer data-testid="gaming" isDark={isDark}>
                  <LinkItem isDark={isDark}>
                    <IconContainer darkMode={isDark}>
                      <SiYoutubegaming className="header-icon" />
                    </IconContainer>
                    <Heading isDark={isDark}>Gaming Videos</Heading>
                  </LinkItem>
                  {this.renderViews()}
                </ResponsiveContainer>
              </BodyContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
