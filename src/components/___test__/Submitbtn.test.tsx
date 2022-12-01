import { render, screen, fireEvent } from '@testing-library/react'
import CreateNotes from '../CreateNotes'

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(
    <CreateNotes
      notes={[]}
      setNotes={() => {}}
      handleFormSubmit={handleClick}
    />
  )
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
test('both input should note be empty', () => {
  render(<CreateNotes notes={[]} setNotes={() => {}} />)
  const inputElement1 = screen.getByPlaceholderText(
    /Enter Title for th Note/i
  ) as HTMLInputElement
  const inputElement2 = screen.getByPlaceholderText(
    /Enter Your notes/i
  ) as HTMLInputElement
  fireEvent.click(screen.getByRole('button'))
  expect(inputElement1.value).toBe('')
  expect(inputElement2.value).toBe('')
})
