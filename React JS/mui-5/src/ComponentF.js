import React from 'react'

import { UserContext,ChannelContext} from './App'

const ComponentF = () => {
  return (
    <div>
       <UserContext.Consumer>
                {
                    (user)=>{
                     return (
                        <ChannelContext.Consumer>
                            {
                                (value)=>{
                                    return <p>{user}- says.... {value}</p>
                                }
                            }
                        </ChannelContext.Consumer>
                     )
                    }
                }
       </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
