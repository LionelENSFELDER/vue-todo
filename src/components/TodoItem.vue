<template>
	<b-list-group-item class="todoItem border-0 px-0 my-0">

		<b-input-group>

			<b-input-group-prepend is-text>
				<input type="checkbox" @click="stateChange" v-model="item.completed">
			</b-input-group-prepend>

			<b-form-input :id="item.name" aria-label="Text input with checkbox" :placeholder="item.name" v-model="item.name" v-on:keyup.enter="editThisItem"></b-form-input>

			<b-input-group-append>
				<b-button class="border-0" variant="outline-secondary" v-on:click="deleteThisItem">
					<b-icon class="todoItem_iconTrash" icon="trash-fill" style="color: #9390A8;"></b-icon>
				</b-button>
			</b-input-group-append>

		</b-input-group>

	</b-list-group-item>

</template>

<script>

	export default {
		name: 'TodoItem',
		props: ['item'],
		methods: {
			editThisItem(e){
				let item = this.item;
				let name = e.target.value;
				this.$emit('edit', {item, name});
				
			},
			deleteThisItem(){
				let item = this.item;
				this.$emit('delete', item);
			},
			stateChange(e){
				let item = this.item;
				let state = e.target.checked;
				this.$emit('stateChange', {item, state});
			}
		},
		data(){
			return{
				isCompleted: false
			}
		}
	}

</script>

<style>

.todoItem, 
.todoItem_iconTrash, 
.input-group-prepend, 
.input-group-text,
.form-control{
	background-color: transparent !important;
	border-color: transparent !important;
}
.list-group-item .input-group{
	background-color: #AFAEC8 !important;
}
.todoItem{
	padding: 0.3rem !important;
}

</style>

