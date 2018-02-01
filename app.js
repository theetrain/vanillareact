import React from 'react'

const MyDiv = ({children}) => children()

const MyComponent = ({ input }) => {
  return (
    <MyDiv>
      {
        () => (
          <div>
            {input}
          </div>
        )
      }
    </MyDiv>
  )
}

export default MyComponent
