import React from 'react'

interface CardContextType {
  index: number
}

const CardContext = React.createContext<CardContextType>({
  index: 0,
})

export default CardContext
