<template>
    <div>
        <b-input-group class="mb-5">
          <b-form-input type="text" placeholder="write a task and click add"></b-form-input>

          <b-input-group-append>
            <b-button variant="outline-secondary">Add</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
</template>

<script>
export default {
  name: 'TodoInput'
}
</script>