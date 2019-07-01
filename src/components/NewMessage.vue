<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (enter to add):</label>
      <input type="text" id="new-message" v-model="newMessage">
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
  import db from '@/firebase/init'

  export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
      return {
        newMessage: null,
        feedback: null
      }
    },
    methods: {
      addMessage() {
        if (this.newMessage) {
          db.collection('messages').add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          }).catch(error => {
            console.log(error)
          })
          console.log(this.newMessage, this.name, Date.now())
          this.newMessage = null
          this.feedback = null
        } else {
          this.feedback = 'You must enter a message'
        }
      }
    }
  }
</script>
