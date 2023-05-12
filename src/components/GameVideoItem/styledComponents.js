import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 5px;
  margin-top: 10px;
  width: 24%;
  min-width: 250px;
  font-family: 'roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#64748b')};
`
export const VideoImage = styled.img`
  max-width: 100%;
`
export const CardContainer = styled.div`
display = flex;
`
export const Profile = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
export const Card = styled.div``

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500px;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
`
export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 0px;
`
export const Details = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
`
