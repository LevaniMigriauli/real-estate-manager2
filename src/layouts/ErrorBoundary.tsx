import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { ReactNode } from 'react'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h1>დაფიქსირდა შეცდომა</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>კიდევ სცადეთ</button>
    </div>
  )
}

const GlobalErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload()
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

export default GlobalErrorBoundary