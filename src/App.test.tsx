import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the hero title', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /nana专用片假名练习帐/i,
      }),
    ).toBeInTheDocument()
  })
})
