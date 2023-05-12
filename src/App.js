import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './Context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/PracticedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
    activeWindow: 'HOME',
    showSideBar: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onClickHamBurger = () => {
    this.setState(prevState => ({showSideBar: !prevState.showSideBar}))
  }

  onChangeActiveWindow = id => {
    this.setState({activeWindow: id})
  }

  onClickSaveVideo = videoDetails => {
    const {id} = videoDetails
    const {savedVideosList} = this.state
    let updatedVideos = savedVideosList
    const video = savedVideosList.find(each => each.id === id)
    if (video === undefined) {
      updatedVideos.push(videoDetails)
    } else {
      updatedVideos = savedVideosList.filter(each => each.id !== id)
    }
    this.setState({savedVideosList: updatedVideos})
  }

  render() {
    const {isDark, savedVideosList, activeWindow, showSideBar} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          onClickSaveVideo: this.onClickSaveVideo,
          onChangeActiveWindow: this.onChangeActiveWindow,
          activeWindow,
          showSideBar,
          onClickHamBurger: this.onClickHamBurger,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
