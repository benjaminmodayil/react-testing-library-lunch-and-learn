import React, {useState} from 'react'
import Loader from './Loader'

export default function Form() {
  const [isVisible, setVisibility] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {isVisible && (
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="socialsecurity">Social Security</label>
          <input type="number" name="socialsecurity" id="socialsecurity" />
        </div>
      )}

      <Loader
        buttonType="submit"
        onClick={() => setVisibility(false)}
        isDisabled={!isVisible}
      >
        {!isVisible && 'Your identity has been stolen!'}
      </Loader>
    </form>
  )
}
