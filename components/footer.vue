<template>
    <nav style="z-index: 100;">
        <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="link decoration-1">{{ link.title }}</NuxtLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    title: 'Interiors',
                    url: '/interiors'
                },
                {
                    title: 'Philosophy',
                    url: '/philosophy'
                },
                {
                    title: 'Stories',
                    url: '/stories'
                },
                {
                    title: 'Contacts',
                    url: '/contacts'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        position       : fixed;
        bottom         : 0px;
        left           : 0px;
        right          : 0px;
        display        : flex;
        justify-content: space-between;
        margin         : 0px 40px;
        .link {
            margin-bottom        : 30px;
            font-size            : 20px;
            line-height          : 23px;
            text-underline-offset: 2px;
        }
    }
</style>