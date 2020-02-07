<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Container>
      <TodoCard>
        <!-- <TodoInput v-model="newTodo" v-on:keyup.enter="addTodo"></TodoInput> -->
        <b-form-input type="text" placeholder="write a task and click add" v-model="newTodo" v-on:keyup.enter="addTodo"></b-form-input>
        <TodoItem
          v-for="todo in todos" 
          v-bind:key="todo.id" 
          v-bind:todo="todo"
        ></TodoItem>
      </TodoCard>
    </Container>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import TodoCard from './components/TodoCard.vue';
// import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  components: {
    Container,
    TodoCard,
    TodoItem,
    // TodoInput
  },
  data(){
    return{
      todos: [
        {name: 'taskOne', completed: false},
        {name: 'taskTwo', completed: false},
        {name: 'taskThree', completed: false}
      ],
      newTodo: ""
    }
  },
  methods:{
    addTodo(){
      this.todos.push({
        name:this.newTodo, 
        completed:false
      })
      this.newTodo=""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
