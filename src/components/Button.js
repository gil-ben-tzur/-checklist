import React from 'react'
import classNames from 'classnames'
const Button = ({ classType, children, onClick }) => (
    <button
       onClick={onClick}
       className={classNames('btn',classType)}
    >
      {children}
    </button>
)

export default Button