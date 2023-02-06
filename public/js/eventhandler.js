function removeTodo(todoId) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:8000/remove-todo');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('todoId=' + todoId);
    xhr.addEventListener('load', function (){
        if (this.readyState === XMLHttpRequest.DONE) {
            window.location = "/";
        }
    });
}

function completedTodo(todoId) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:8000/completed-todo');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('todoId=' + todoId);
    xhr.addEventListener('load', function (){
        if (this.readyState === XMLHttpRequest.DONE) {
            window.location = "/";
        }
    });
}