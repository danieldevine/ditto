<template>
    <social-sharing
        url="https://danieldevine.github.io/ditto/"
        :title="`My Prompt: ${description}`"
        :description="description"
        hashtags="WritingPrompt"
        inline-template
    >
        <div class="ditto__social">
            <div class="button">
                <network network="facebook">
                    <i class="fab fa-facebook"></i> Share on Facebook
                </network>
            </div>
            <div class="button">
                <network network="twitter">
                    <i class="fab fa-twitter"></i> Share on Twitter
                </network>
            </div>
        </div>
    </social-sharing>
</template>

<script>
export default {
    name: "Share",

    props: {
        description: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
</style>