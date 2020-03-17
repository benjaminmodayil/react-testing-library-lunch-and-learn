import React from 'react'
import {render, fireEvent, waitForElement} from '@testing-library/react'
import Loader from '../Loader'

describe('<Loader />', () => {
  it('should remove the button after clicking', async () => {
    const {queryByText} = render(<Loader />)
    const button = queryByText('setStatus', {exact: false})

    expect(button).toBeInTheDocument() // As a user, I'm going to look for a button

    fireEvent.click(button) // As a user, I'm going to click a button.

    expect(queryByText('loading...')).toBeInTheDocument() // As a user, I'mma wait for my thingy to load
    expect(button).not.toBeInTheDocument() // As a user, I wouldn't expect to be able to click the load button if it's already loading

    await waitForElement(() =>
      // Just a thingy RTL provides us when we're waiting for something to render/finish (results of an API fetch)
      queryByText('setStatus', {
        exact: false,
      }),
    )

    expect(
      queryByText('setStatus', {
        exact: false,
      }),
    ).toBeInTheDocument() // As a user, I would expect a "finished state", but Ben is in a rush, so the "finshed state" is just the button to start the process reappearing
  })
})