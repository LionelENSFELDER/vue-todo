<template>
    <b-list-group-item>
        {{todo.name}}
        <b-icon icon="trash-fill"></b-icon>
      </b-list-group-item>
</template>

<script>
export default {
  name: 'TodoCard',
  props: ['todo']
}
</script>