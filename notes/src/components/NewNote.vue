<template lang="">
<div class="new-note">
    <label>
        <p class="input-ttl">Title</p>
        <input v-model="note.title" type="text" />
    </label>
    <label>
        <p class="input-ttl">Description</p>
        <textarea v-model="note.desc"></textarea>
    </label>

    <div class="note-priority">
        <div class="note-priority-ttl">Priority</div>
        <div class="note-priority-radios">
            <label>
                <input type="radio" name="priority" value="normal" v-model="note.priority">
                <span>Normal</span>
            </label>
            <label>
                <input type="radio" name="priority" value="important" v-model="note.priority">
                <span>Important</span>
            </label>
            <label>
                <input type="radio" name="priority" value="very important" v-model="note.priority">
                <span>Very important</span>
            </label>
        </div>

    </div>

    <button class="btn btnPrimary" @click="addNote">New note</button>
</div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        },
    }
};
</script>

<style lang="scss">
.new-note {
    text-align: center;
    padding: 20px;
    margin-bottom: 40px;

    .btn {
        margin-top: 20px;
    }

    .input-ttl,
    .note-priority-ttl {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
    }

    .note-priority {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-radios {
            display: flex;

            label {
                display: flex;
                align-items: center;

                input {
                    width: 20px;
                    height: 20px;
                    margin-bottom: 0;
                }

                span {
                    white-space: nowrap;
                    margin-left: 10px;
                }

                &+label {
                    margin-left: 30px;
                }
            }
        }

    }
}
</style>
