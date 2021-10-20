import React, { createContext } from 'react'

export { default as Card } from '@vtex/styleguide/lib/Card'
export { default as Input } from '@vtex/styleguide/lib/Input'
export { default as Button } from '@vtex/styleguide/lib/Button'
export { default as Box } from '@vtex/styleguide/lib/Box'

export const ToastProvider = jest
  .fn()
  .mockImplementation(({ children }) => <div>{children}</div>)

export const ToastContext = createContext({
  showToast: jest.fn(),
})
