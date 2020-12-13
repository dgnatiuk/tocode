<template lang="">
<div class="notes">
    <div class="note" 
        :class="{full: !grid, yellow: note.priority === 'important', red: note.priority === 'very important'}" 
        v-for="(note, index) in notes" 
        :key="index"
    >
        <div class="note-header" :class="{full: !grid}">
            <div class="note-ttl">
                <input 
                    type="text" 
                    @keyup.enter="applyEdit(note, 'title')" 
                    @keyup.escape="note.titleEdit = false" 
                    v-if="note.titleEdit" 
                    v-model="title"
                    :ref="'title_' + index"
                />
                    <!-- v-click-outside="applyEdit(note, 'title')"  Аттрибут для инпута-->
                <p @click="edit(note, index, 'title')" v-else class="note-ttl-text">{{ note.title }} </p>
                <p class="note-ttl-priority">{{note.priority}}</p>
            </div>
            <span class="close" @click="removeNote(index)">X</span>
        </div>
        <div class="note-body">
            <input 
                type="text"
                @keyup.enter="applyEdit(note, 'desc')" 
                @keyup.escape="note.descEdit = false" 
                v-if="note.descEdit" 
                v-model="desc"
                :ref="'desc_' + index"
            />
             <!-- v-click-outside="applyEdit(note, 'title')"  Аттрибут для инпута-->
            <p @click="edit(note, index, 'desc')" v-else>{{ note.desc }}</p>
            <p class="note-ttl-priority">{{ note.date }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            desc: ''
        }
    },
    props: {
        notes: {
            type: Array,
            required: true,
        },
        grid: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        removeNote(index) {
            console.log(`Note id - ${index}`);
            this.$emit("remove", index);
        },
        edit(note, index, type) {
            this[type] = note[type];
            note[`${type}Edit`] = true;
            this.$nextTick(() => {
                this.$refs[`${type}_${index}`][0].focus();
            });
        },
        applyEdit(note, type){
            if (this[type]){
                note[type] = this[type];
                note.date = new Date(Date.now()).toLocaleString()
            } 
            note[`${type}Edit`] = false;
        }
    },
};
</script>

<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;

    .note {
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background: #ffffff;
        transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
        box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

        &:hover {
            box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }

        &.full {
            width: 100%;
        }

        &-body {
            p, input {
                margin: 20px 0;
            }

            span {
                font-size: 14px;
                color: #999999;
            }
        }

        .note-ttl {
            display: flex;
            flex-direction: column;
            width: 100%;

            &-text {
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &-priority {
                font-size: 12px;
            }

            input{
                font-weight: bold;
                color: blue;
                font-size: 20px;
            }
        }

        input {
            padding: 0;
            margin-bottom: 0;
            border: none;
            font-family: "Montserrat", Helvetica, Arial, sans-serif;
        }

        .close {
            margin-left: 5px;
        }

        &.yellow .note-ttl {
            p, input {
                color: #b6d329;
            }
        }

        &.red .note-ttl {
            p, input {
                color: #ef3a3a;
            }
        }
    }
}

.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: blue;
        font-size: 20px;
        line-height: 1.2em;
    }

    svg {
        margin-right: 12px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            color: blue;
        }
    }

    &.full {
        justify-content: center;
    }
}
</style>
