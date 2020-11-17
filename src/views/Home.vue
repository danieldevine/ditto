<template>
    <div class="home">
        <div class="sidebar">
            <div class="logo"><router-link to="/">Ditto</router-link></div>
            <div class="sidebar__categories">
                <div
                    class="sidebar__category"
                    v-for="(category, index) in categories"
                    :key="index"
                >
                    <a class="button" @click.prevent="updateCategory(category)"
                        >{{ category }} Ideas</a
                    >
                </div>
                <div class="sidebar__category">
                    <a class="button" @click.prevent="updateCategory('Random')"
                        >Random Ideas</a
                    >
                </div>
            </div>
            <!-- <Share :description="prompt.prompt"></Share> -->
            <div class="about">
                Ditto is a writing-prompt generator. It generates prompts to get
                you writing. To get a new prompt, click on a category (journal,
                poem, story or speech) if you’d prefer a particular genre, or
                click ‘random’ if you have no preference. <br />
                <span>Prompts By <strong> Ellen Dillon</strong></span>
                <span>Built By <strong> Dan Devine</strong></span>
            </div>
        </div>

        <div class="prompt" v-if="prompt">
            <h6 class="prompt__category">{{ prompt.category }}</h6>
            <h2 class="prompt__prompt">{{ prompt.prompt }}</h2>
            <a
                @click.prevent="getPrompt(currentCategory)"
                href="#"
                class="button"
                >New {{ currentCategory }} Idea</a
            >
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
    name: "Home",

    data() {
        return {
            prompt: null,
            categories: null,
            currentCategory: "Random",
        };
    },

    mounted() {
        this.getPrompt(this.currentCategory);
        this.getCategories();
    },

    methods: {
        getPrompt(sort) {
            const getUrl = `${window.location}/data/prompts.json`;

            axios.get(getUrl).then((result) => {
                if (sort != "Random") {
                    const prompts = result.data.prompts.filter(
                        (prompt) => prompt.category == sort
                    );
                    this.prompt =
                        prompts[Math.floor(Math.random() * prompts.length)];
                } else {
                    const prompts = result.data.prompts;
                    this.prompt =
                        prompts[Math.floor(Math.random() * prompts.length)];
                }
            });
        },

        getCategories() {
            const getUrl = `${window.location}/data/prompts.json`;

            axios.get(getUrl).then((result) => {
                const prompts = result.data.prompts;
                let categories = new Set();

                prompts.forEach((element) => {
                    categories.add(element.category);
                });

                this.categories = categories;
            });
        },

        updateCategory(category) {
            this.currentCategory = category;
            this.getPrompt(this.currentCategory);
        },
    },
};
</script>
<style lang="scss" scoped>
.prompt {
    @include tablet {
        margin-top: 4rem;
    }
    &__prompt {
        margin-bottom: baseLine(7);
    }
}

.logo {
    font-size: typeScale(4);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: baseLine(5);
    font-weight: 900;

    @include mobile {
        position: absolute;
        top: -3rem;
        left: 0;
    }
}

.home {
    @include gridBlock();
    grid-template-columns: 3fr 9fr;
    grid-gap: typeScale(2);
    @include tablet {
        grid-template-columns: 3.5fr 8.5fr;
    }

    @include mobile {
        display: flex;
        flex-direction: column-reverse;
    }
}

.sidebar__categories {
    @include mobile {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
