<template>
    <div class="todo-list">
        <h2>Todo</h2>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input v-model="todo.is_completed" @change="updateTodo(todo)" type="checkbox">
                {{ todo.title }}
                <button @click="clearTodo(todo)"> x</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TodoList',
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        // GET - 가지고 오는 것 : data X
        // POST - 등록/저장 : data O
        // PUT - 수정 : data O
        // DELETE - 삭제 : data X, 리소스(url) 삭제
        clearTodo(todo) {
            this.$session.start()
            const token = this.$session.get('jwt')
            const options = {
                headers: {
                    Authorization: `JWT ${token}` // JWT 다음에 공백있음.
                }
            }
            axios.delete(`http://127.0.0.1:8000/api/v1/todos/${todo.id}`, options)
                .then(response => {
                    console.log(response) // 만약, 오류가 발생하게 되면 ESLint 설정을 package.json을 추가!
                    const target = this.todos.find( el => {
                        return el === todo
                    })
                    const idx = this.todos.indexOf(target)
                    if (idx > -1) {
                        this.todos.splice(idx, 1)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateTodo(todo) {
            this.$session.start()
            const token = this.$session.get('jwt')
            const options = {
                headers: {
                    Authorization: `JWT ${token}` // JWT 다음에 공백있음.
                }
            }
            // const upda
            // -> 정확하게 todo의 구조와 동일하므로 data는 그대로 todo object만 보내도 돼!
            axios.put(`http://127.0.0.1:8000/api/v1/todos/${todo.id}/`, todo, options)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style>
    
</style>