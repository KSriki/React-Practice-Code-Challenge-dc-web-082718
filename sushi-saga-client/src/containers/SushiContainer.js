import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({eatSushi,platter,nextFour,eaten}) => {

  return (
    <Fragment>
      <div className="belt">
        {
          platter.map(sushi => {

              //check if current sushi inside the app state eatenSushis
              if(eaten.includes(sushi.id)){
                  return (<Sushi sushi={sushi} eatSushi={eatSushi} ate={true} />)

              }
              else{
                  return (<Sushi sushi={sushi} eatSushi={eatSushi} ate={false} />)

              }

          })
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
