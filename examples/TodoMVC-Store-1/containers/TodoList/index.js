import { toggleAll, deleteCompleted, insertTodo } from './reducers'
import TodoList from '../../components/TodoList/index'
import React from 'react'

export default function TodoListContainer () {
  return {
    storePath: 'todos',

    reducers (sources) {
      return [
        sources.childrenActions
          .filterByType('toggleAll')
          .reducer(toggleAll),

        sources.childrenActions
          .filterByType('deleteCompleted')
          .reducer(deleteCompleted),

        sources.childrenActions
          .filterByType('insertTodo')
          .reducer(insertTodo)
      ]
    },

    view (props, state) {
      return <TodoList todos={state.list} filter={props.route.filter} />
    }
  }
}
