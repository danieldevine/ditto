<template>
    <div class="app" id="app">
        <div class="app__inner">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
.nav {
    margin-bottom: baseLine(6);
}

.app {
    margin-top: 6rem;
    @include gridBlock(1);
    width: 100%;
    height: 100%;

    @include tablet {
        margin-top: 3rem;
    }

    @include mobile {
        margin-top: 4rem;
    }

    &__inner {
        @include gridBlock(1);
        margin-left: columnWidths(1);
        margin-right: columnWidths(1);
        z-index: 2;
        position: relative;

        @include tablet {
            margin-left: 2rem;
            margin-right: 2rem;
        }

        @include mobile {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
    .about {
        font-size: typeScale(-1);
        margin-top: 1rem;
        margin-right: 3rem;

        span {
            margin-top: 0.5rem;
            display: inline-block;
        }

        @include mobile {
            margin: 1rem 0;
        }
    }
}
</style>
