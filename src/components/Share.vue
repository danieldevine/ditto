<template>
        <social-sharing
            url="https://danieldevine.github.io/ditto/"
            title=" I just got a great Writing prompt"
            :description="prompt"
            hashtags="WritingPrompt"
            twitter-user="altkrelb"
            inline-template
        >
            <div class="ditto__social">
                <div class="button">
                    <network network="facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </network>
                </div>
                <div class="button">
                    <network network="twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </network>
                </div>
            </div>
        </social-sharing>
</template>

<script>
    export default {
        name: 'Share',

        props: {
            prompt: {
                type: String,
                default: ''
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>