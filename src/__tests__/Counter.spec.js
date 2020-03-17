// The line is handled via the cadent-cli so you don't have to import it. 👇
// import "@testing-library/jest-dom";
//

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../Counter'

describe('<Counter />', () => {
  it('should subtract to negative -1 when clicking the subtract button', () => {
    const {queryByText} = render(<Counter />) // mount component!

    const countText = queryByText('Count:', {exact: false}) // search DOM for text, but don't worry about casing, and matches substrings
    const subtract = queryByText('subtract')
    fireEvent.click(subtract)
    expect(countText.textContent).toBe('Count: -1')
  })

  it('should add to 2 when clicking the add button 3 more times', () => {
    const {queryByText} = render(<Counter />) // mount component!

    const countText = queryByText('Count:', {exact: false}) // search DOM for text, but don't worry about casing, and matches substrings
    const add = queryByText('add')
    fireEvent.click(add)
    fireEvent.click(add)
    fireEvent.click(add)
    expect(countText.textContent).toBe('Count: 3')
  })
})
