<template>
<div class="message">
    <p>Error - {{ message }}</p>
</div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.message {
    text-align: center;
    color: red;
}
</style>
