import React from 'react'
import {render, fireEvent, waitForElement} from '@testing-library/react'
import Form from '../Form'

describe('<Form />', () => {
  it('fire a submit and show the "stolen identity" message)', async () => {
    const {getByLabelText, getByText, getByTestId} = render(<Form />)
    const testData = {name: 'Donovan Bark', socialSecurity: '122-444-0001'}
    fireEvent.change(getByLabelText(/name/i), { // 👈 another way to use that previous {exact: false} object in previous examples
      target: {value: testData.name},
    })
    fireEvent.change(getByLabelText(/social security/i), {
      target: {value: testData.socialSecurity},
    })

    fireEvent.click(getByTestId(/button/i))
    await waitForElement(() =>
      // Just a thingy RTL provides us when we're waiting for something to render/finish (results of an API fetch)
      getByText('setStatus', {
        exact: false,
      }),
    )
    expect(getByText(/your identity has been stolen/i)).toBeInTheDocument()
  })
})
