<!-- TEMPLATE -->
<template>

	<div>
	<b-card 
		id="taskmanager" 
		title="Miiniimaal tasks list"
		style="max-width: 30rem;"
		class="mx-auto border-0 py-5 text-left"
	>

		<div>
			<b-input-group class="mb-3">

				<b-input-group-prepend>
					<b-button v-on:click="debug">
						<b-icon icon="braces"></b-icon>
					</b-button>
					<b-button>
						<b-icon icon="eye-slash"></b-icon>
					</b-button>
				</b-input-group-prepend>

				<b-form-input type="text" class="input" placeholder="write a task to done" v-model="newTodo" v-on:keyup.enter="addTodo"></b-form-input>

			</b-input-group>
		</div>
		
		<TodoItem @edit="editTodo" @delete="deleteTodo" @stateChange="stateChange" v-for="item in todoList" v-bind:key="item.id" v-bind:item="item"></TodoItem>

		<!--<b-card-text>
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</b-card-text>-->

		<div>
			<b-button href="#" variant="link" class="font-italic" v-on:click="debug">Debug</b-button>
			<b-button href="#" variant="link" class="font-italic">Hide complete</b-button>
			<b-button href="#" variant="link" class="font-italic">Clear All !</b-button>
		</div>
	</b-card>

	
	<Footer></Footer>

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
			editTodo({item, name}){
				item.name = name;
			},
			deleteTodo(item){
				this.todoList.splice(this.todoList.indexOf(item), 1);	
			},
			stateChange({item, state}){
				item.completed = state;
			}
		}
	}
</script>
<!-- STYLE -->
<style>
	body{
		background-color: #ECEEF5 !important;
	}
  #taskmanager {
	background-color: #9390A8 !important;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
