<template>
 <div class="login">
        <h2>This is a login page</h2>
        <LoginForm @login-event="login"/>

    </div>
</template>

<script>
import axios from 'axios'
// 특정 폴더명으로 경로가 끝나게 되면, 폴더 내부의 index.js를 뜻함.
import router from '../router'
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'login',
    components: {
        LoginForm
    },
    methods: {
        login (credentials) {
            axios.post('http://127.0.0.1:8000/api-token-auth/', credentials)
                .then(response => {
                    console.log(response)
                    console.log(response.data.token)
                    const token = response.data.token
                    this.$session.start()
                    this.$session.set('jwt', token)
                    router.push('/')
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