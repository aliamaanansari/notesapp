import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

test('snapshort test', () => {
  const tree = renderer.create(<App />).toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
