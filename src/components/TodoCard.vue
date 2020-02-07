<template>
    <div>
    <b-card
        title="Card Title"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mx-auto"
    >
        <b-card-text>
        <slot></slot>
        </b-card-text>
    </b-card>
    </div>
</template>

<script>
export default {
  name: 'TodoCard'
}
</script>