import styled from 'styled-components'

export const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#f1f1f1')};
`
export const BodyContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  width: 85%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
  overflow: auto;
  height: 90vh;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 30vh;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0px;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`
export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  margin-right: 0px;
  margin-right: 5px;
  font-size: 25px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  color: ${props => (!props.isDark ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
  font-size: 40px;
`
