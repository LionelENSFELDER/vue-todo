<!-- TEMPLATE -->
<template>
	<div style="max-width: 25rem;" class="mx-auto">
		<div id="taskmanager">
			<b-icon icon="plug" animation="throb" font-scale="5" class="mb-3"></b-icon>
			
			<div>
				<b-input-group>

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
			editTodo({item, name}){
				item.name = name;
			},
			deleteTodo(item){
				this.todoList.splice(this.todoList.indexOf(item), 1);	
			},
			stateChange({item, state}){
				item.completed = state;
				state == true ? this.item.variant = "success" : this.item.variant="";
			}
		}
	}
</script>
<!-- STYLE -->
<style>
body{
}
  #taskmanager {
	/* background-color:#444659;*/
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
