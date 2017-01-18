module.exports = {
  setTodos: function (todos) {
    if (Array.isArray(todos)) { // checking to see if todos array is an array
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }
    catch (error) {
    }
    if (Array.isArray(todos)) {
      return todos;
    }
    else {
      return [];
    }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //filter by not completed
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      }
      else if (a.completed && !b.completed) {
        return 1;
      }
      else {
        return 0;
      }


    })
    return filteredTodos;
  }
};
