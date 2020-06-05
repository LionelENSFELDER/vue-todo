<!-- TEMPLATE -->
<template>
	<div style="max-width: 25rem;" class="mx-auto">
		<div id="taskmanager">
			<img alt="Vue logo" src="../assets/logo.png">
			<b-container>
					<b-form-input type="text" class="mb-4" placeholder="write a task to done" v-model="newTodo" v-on:keyup.enter="addTodo"></b-form-input>
					<TodoItem @delete="deleteTodo" @stateChange="stateChange" v-for="item in todoList" v-bind:key="item.id" v-bind:item="item"></TodoItem>
				<b-button class="mt-5" variant="outline-secondary" v-on:click="debug">
					DEBUG
				</b-button>
			</b-container>
		</div>
	</div>
</template>


<script>
  import TodoItem from '../components/TodoItem.vue';

	export default {
		name: 'TasksManager',
		components: {
			TodoItem
		},
		data(){
			return{
				todoList: [],
				newTodo: ""
			}
		},
		methods:{
			debug(){
				console.log("-----> todoList.length= " + this.todoList.length);
				(()=>{
					for(let item of this.todoList){
						console.log("name: " + item.name + " & completed: " + item.completed);
					}
				})()
			},
			addTodo(){
				this.todoList.push({
					name:this.newTodo, 
					completed:false
				})
				this.newTodo=""
			},
			deleteTodo(item){
				this.todoList.splice(this.todoList.indexOf(item), 1);	
			},
			stateChange({item, state}){
				console.log(this.todoList.indexOf(item) + state);
				item.completed = state;
				//item.completed == false ? item.completed =true : item.completed =false;
			}
		}
	}
</script>
<!-- STYLE -->
<style>
  #taskmanager {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
