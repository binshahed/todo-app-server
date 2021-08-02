const shortid = require('shortid')

const todos = []

exports.create = (req, res) => {
  const { text } = req.body
  const todo = {
    id: shortid(),
    text,
    isCompleated: false,
    created: new Date()
  }
  todos.push(todo)

  res.status(201).json({ message: 'data send successfully', ...todo })
}

exports.findAll = (req, res) => {
  return res.status(200).json(todos)
}

exports.findById = (req, res) => {
  const { todosId } = req.params
  const todo = todos.find(todo => todo.id === todosId)
  return res.status(201).json(todo)
}

exports.putUpdate = (req, res) => {
  const { todosId } = req.params
  const todo = todos.find(todo => todo.id === todosId)
  const { text, isCompleated } = req.body

  if (!todo) {
    const todo = {
      id: shortid(),
      text,
      isCompleated: false,
      created: new Date()
    }
    todos.push(todo)
    res.status(201).json({ message: 'new data ', ...todo })
  } else {
    todo.text = text || todo.text
    req.isCompleated = isCompleated || req.isCompleated

    const index = todos.findIndex(todo => todo.id === todosId)
    todos[index] = todo
    res.status(204).json({ message: 'Todo Updated successfully ', ...todo })
  }
}

exports.patchUpdate = (req, res) => {
  const { todosId } = req.params
  const { text, isCompleated } = req.body

  const index = todos.findIndex(todo => todo.id === todosId)

  if (index == -1) {
    return res.status(204).json({ message: 'Todos not found' })
  }

  todos[index].text = text || todos[index].text
  todos[index].isCompleated = isCompleated || todos[index].isCompleated

  return res.status(204).json({ message: 'Todos Updated', ...todos[index] })
}

exports.deleteById = (req, res) => {
  const { todosId } = req.params
  const index = todos.findIndex(todo => todo.id === todosId)
  todos.splice(index, 1)
  return res.status(204).json({ message: 'Todos deleted successfully' })
}
