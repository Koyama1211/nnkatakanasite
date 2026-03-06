import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the hero title', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Learn katakana with a personal, focused study flow\./i,
      }),
    ).toBeInTheDocument()
  })
})
