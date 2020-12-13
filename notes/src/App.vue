<template>
<div class="wrapper">
    <div class="wrapper-content">
        <section>
            <div class="container">
                <message v-if="errorMsg" :message="errorMsg" />

                <new-note :note="note" @addNote="addNote" />

                <div class="note-header">
                    <h1>{{ title }}</h1>

                    <search @search="search = $event" :value="search" placeholder="Find your note" />

                    <div class="icons">
                        <svg @click="grid = true" :class="{ active: grid }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        <svg @click="grid = false" :class="{ active: !grid }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3" y2="6"></line>
                            <line x1="3" y1="12" x2="3" y2="12"></line>
                            <line x1="3" y1="18" x2="3" y2="18"></line>
                        </svg>
                    </div>
                </div>

                <notes :notes="notesFilter" @remove="removeNote" :grid="grid" />
            </div>
        </section>
    </div>
</div>
</template>

<script>
import message from "@/components/Message";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";

export default {
    components: {
        message,
        newNote,
        notes,
        search,
    },
    data() {
        return {
            title: "Notes App",
            errorMsg: null,
            search: "",
            grid: true,
            note: {
                title: "",
                desc: "",
                priority: "normal",
            },
            notes: [{
                    title: "First Note",
                    desc: "Desc for 1 Note",
                    priority: "normal",
                    titleEdit: false,
                    descEdit: false,
                    date: new Date(Date.now()).toLocaleString(),
                },
                {
                    title: "Second Note",
                    desc: "Desc for 2 Note",
                    priority: "normal",
                    titleEdit: false,
                    descEdit: false,
                    date: new Date(Date.now()).toLocaleString(),
                },
                {
                    title: "Third Note",
                    desc: "Desc for 3 Note",
                    priority: "normal",
                    titleEdit: false,
                    descEdit: false,
                    date: new Date(Date.now()).toLocaleString(),
                },
            ],
        };
    },
    computed: {
        notesFilter() {
            let array = this.notes;
            let search = this.search;

            if (!search) return array;

            search = search.trim().toLowerCase();

            return array.filter(
                (item) => item.title.toLowerCase().indexOf(search) !== -1
            );
        },
    },
    methods: {
        addNote() {
            let {
                title,
                desc,
                priority
            } = this.note;

            if (title === "") {
                this.errorMsg = "title can`t be black";
                return false;
            }

            this.notes.push({
                title,
                desc,
                priority,
                date: new Date(Date.now()).toLocaleString(),
                titleEdit: false,
                descEdit: false,
            });

            this.note.title = "";
            this.note.desc = "";
            this.note.priority = "normal";

            this.errorMsg = null;
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
    }
};
</script>

<style></style>
