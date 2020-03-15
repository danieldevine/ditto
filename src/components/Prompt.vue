<template>
    <div class="prompt" v-if="prompt">
        <h6 class="prompt__category"></h6>
        <h2 class="prompt__prompt">{{ prompt.prompt }}</h2>
        <a @click.prevent="getPrompt" href="#" class="button">New Prompt</a>
        <Share></Share>
    </div>
</template>

<script>
    import axios from 'axios'
    import Share from '@/components/Share.vue'

    export default {
        components: {
            Share
        },

        data() {
            return {
                prompt: null
            }
        },

        mounted() {
            this.getPrompt()
        },

        methods: {
            getPrompt() {
                axios
                    .get('http://localhost:8080/data/prompts.json')
                    .then(result => {
                        const prompts = result.data.prompts
                        this.prompt =
                            prompts[Math.floor(Math.random() * prompts.length)]
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped></style>
