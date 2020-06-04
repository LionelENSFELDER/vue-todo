<template>
	<b-list-group-item>

		<b-input-group class="mb-2">

			<b-input-group-prepend is-text>
				<input type="checkbox" aria-label="Checkbox for following text input">

			</b-input-group-prepend>
				<b-form-input aria-label="Text input with checkbox" :placeholder="item.name" disabled>
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
			deleteThisItem () {
				let item = this.item;
				this.$emit('delete', item);
			}
		}
	}

</script>
