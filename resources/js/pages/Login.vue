<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>

    <form @submit.prevent="login">
      <div>
        <label>Correo electrónico</label>
        <input 
          type="email" 
          v-model="email" 
          placeholder="ejemplo@correo.com"
          required
        />
      </div>

      <button type="submit">Ingresar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      error: null
    }
  },
  methods: {
    async login() {
      this.error = null

      try {
        const response = await axios.post('/api/login', {
          email: this.email
        })

        // Guardar usuario en localStorage (opcional)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        // Redirigir al home
        this.$router.push('/')

      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message
        } else {
          this.error = 'Error del servidor'
        }
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
}

button {
  padding: 8px 15px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
