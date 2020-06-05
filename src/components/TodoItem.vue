<template>
	<b-list-group-item class="border-0 px-0 my-0" :variant="variant">

		<b-input-group>

			<b-input-group-prepend is-text>
				<!-- <input type="checkbox" aria-label="Checkbox for following text input" v-model="isChecked"> -->
				<input type="checkbox" aria-label="Checkbox for following text input" @click="stateChange" v-model="this.item.completed">

			</b-input-group-prepend>
				<b-form-input aria-label="Text input with checkbox" :placeholder="item.name" ref="_checkbox" disabled>
			</b-form-input>

			<b-input-group-append>
				<b-button variant="outline-secondary" v-on:click="deleteThisItem">
					<b-icon icon="trash-fill"></b-icon>
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
			deleteThisItem(){
				const item = this.item;
				this.$emit('delete', item);
			},
			stateChange(e){
				const item = this.item;
				let state = e.target.checked;
				state == true ? this.variant = "success" : this.variant="";
				console.log("this variant=" + this.variant);
				this.$emit('stateChange', {item, state});
			}
		},
		data(){
			return{
				variant: ""
			}
		}
	}

</script>
