import ThemeContext from '../../Context/ThemeContext'

import {
  FailureContainer,
  ErrorMsg,
  Suggestion,
  FailureImage,
  RetryButtonFailure,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props
  const onClickRetryButton = () => {
    onClickRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <ErrorMsg darkMode={isDark}>Oops! Something Went Wrong</ErrorMsg>
            <Suggestion darkMode={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </Suggestion>
            <RetryButtonFailure type="button" onClick={onClickRetryButton}>
              Retry
            </RetryButtonFailure>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureView
