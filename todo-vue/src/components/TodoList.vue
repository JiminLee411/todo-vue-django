<template>
    <div class="todo-list">
        <h2>Todo</h2>
        <ul v-for="todo in todos" :key="todo.id">
            <li>{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    
</style>