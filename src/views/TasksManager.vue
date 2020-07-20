<!-- TEMPLATE -->
<template>

	<div>
	<b-card 
		id="taskmanager" 
		title=""
		style="max-width: 30rem;"
		class="mx-auto border-0 py-5 text-left"
	>

		<b-card-header class="p-0 my-3 border-0 bg-transparent">
			<div id="card-header-container">
				<h1 class="font-weight-bold">Vue todo list</h1>
			</div>
		</b-card-header>


		<div>
			<b-input-group class="mb-3">
				<b-form-input id="todoInput" type="text" class="input mr-2" placeholder="Write a task & press ENTER" v-model="newTodo" v-on:keyup.enter="addTodo"></b-form-input>
				<button type="button" class="btn btn-outline-light addTodo_btn" @click="addTodo">
					<!-- <b-icon id="addTodo_icon" icon="lightning"></b-icon>-->
					<i class="las la-bolt la-lg"></i>
				</button>
			</b-input-group>
		</div>
		
		<TodoItem @edit="editTodo" @delete="deleteTodo" @stateChange="stateChange" v-for="item in todoList" v-bind:key="item.id" v-bind:item="item"></TodoItem>

		<!--<b-card-text>
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</b-card-text>-->


		<b-card-footer class="p-0 my-3 border-0 bg-transparent">
			<div>
				<!-- <button type="button" class="btn btn-link mr-2" v-on:click="debug">Debug</button> -->
				<button type="button" class="btn btn-link mr-2" v-on:click="displayAllTasks">All</button>
				<button type="button" class="btn btn-link mr-2" v-on:click="displayCompletedTasks">Complete</button>
				<button type="button" class="btn btn-link mr-2" v-on:click="displayIncompletedTasks">Incomplete</button>
			</div>
		</b-card-footer>
	</b-card>

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
				let todoInput = document.getElementById('todoInput');
				if(todoInput.value != '' && todoInput.value != ' ' && todoInput.value.length > 2){
					this.todoList.push({
					name:this.newTodo, 
					completed:false
					})
					this.newTodo=""
				}else{
					alert("Your task is empty or need more than 1 string...")
				}
				
			},
			editTodo({item, name}){
				item.name = name;
			},
			deleteTodo(item){
				this.todoList.splice(this.todoList.indexOf(item), 1);	
			},
			stateChange({item, state}){
				item.completed = state;
			},
			displayAllTasks(){
				let itemsList = document.querySelectorAll('.todoItem');
				itemsList.forEach((item)=>{
					item.classList.remove('d-none');
				})
			},
			displayCompletedTasks(){
				let itemsList = document.querySelectorAll('.todoItem');
				itemsList.forEach((item)=>{
					item.classList.remove('d-none');
					let checkbox = item.querySelector('input[type="checkbox"]');
					if(checkbox.checked == false){
						item.classList.add('d-none');
					}
					
				})

			},
			displayIncompletedTasks(){
				let itemsList = document.querySelectorAll('.todoItem');
				itemsList.forEach((item)=>{
					item.classList.remove('d-none');
					let checkbox = item.querySelector('input[type="checkbox"]');
					if(checkbox.checked == true){
						item.classList.add('d-none');
					}
					
				})
			}
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	body{
		background-color: #1A1A1A !important;
	}
	.card-title{
		font-family: 'VT323';
	}
	#todoInput{
		background-color: #AFAEC8 !important;
	}
	#taskmanager {
		background-color: #9390A8 !important;
		font-family: 'Open Sans', Helvetica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #1A1A1A;
		margin-top: 60px;
	}
	.btn-link, .btn-outline-light{
		color: #AFAEC8 !important;
	}
	.btn-outline-light{
		border-color: #AFAEC8 !important;
	}
	.btn-outline-light:hover{
		background-color: #9390A8 !important;
	}
	#card-header-container{
		font-size: 1.8rem;
		color: white;
	}
</style>
