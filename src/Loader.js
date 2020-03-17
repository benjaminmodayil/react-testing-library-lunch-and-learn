import React, {useState, useEffect} from 'react'

export default function Loader({
  buttonType = 'button',
  isDisabled,
  onClick,
  children,
}) {
  const [status, setStatus] = useState('idle')
  useEffect(() => {
    setTimeout(() => {
      setStatus('idle')
    }, 4000)
  }, [status])

  return (
    <div>
      <p>{status === 'loading' ? 'loading...' : children || 'idle'}</p>
      {status !== 'loading' && (
        <button
          data-testid="button"
          type={buttonType}
          disabled={isDisabled}
          onClick={() => {
            setStatus('loading')
            if (onClick) onClick()
          }}
        >
          setStatus(`loading`)
        </button>
      )}
    </div>
  )
}
