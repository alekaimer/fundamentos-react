import React from 'react'

export default props => {
  // console.log(`tipo`, typeof props.children.map)
  return (
    <div>
      {
        // React.Children.map(props.children , child => {
        //   return React.cloneElement(child, props)
        // })

        // passa a ser

        props.children.map((child,i) => {
          return React.cloneElement(child, { ...props, key: i })
        })

      }
    </div>
  )
}