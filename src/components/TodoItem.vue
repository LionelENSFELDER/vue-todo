<template>
	<b-list-group-item class="border-0 px-0 my-0">

		<b-input-group>

			<b-input-group-prepend is-text>
				<input type="checkbox" aria-label="Checkbox for following text input" @click="stateChange" v-model="this.item.completed">
			</b-input-group-prepend>

			<b-form-input :id="item.name" aria-label="Text input with checkbox" :placeholder="item.name" v-model="item.name" v-on:keyup.enter="editThisItem"></b-form-input>

			<b-input-group-append>
				<b-button variant="outline-secondary" v-on:click="deleteThisItem">
					<b-icon icon="trash-fill" style="color: #7952b3;"></b-icon>
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
				const item = this.item;
				let name = e.target.value;
				this.$emit('edit', {item, name});
				
			},
			deleteThisItem(){
				const item = this.item;
				this.$emit('delete', item);
			},
			stateChange(e){
				const item = this.item;
				let state = e.target.checked;
				state == true ? this.variant = "success" : this.variant="";
				this.$emit('stateChange', {item, state});
			}
		},
		data(){
			return{
				variant: "",
				//name: ""
				//isDisabled: true
			}
		}
	}

</script>

<style>

input[type=checkbox]:checked{
	background-color: red !important;
}

</style>

