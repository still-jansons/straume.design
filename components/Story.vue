<template>
    <div class="story-wrapper flex flex-col"
    :class="story.position_type"
    :style="`align-self: ${story.position_type};`">
        <div class="image-wrapper">
            <img :src="require(`~/assets/images/stories/${story.images_folder}/${story.cover_image.image}.jpg`)"
            :alt="story.cover_image.info">
        </div>
        <div class="title flex flex-col items-start justify-end relative">
            <h4>{{story.title}}</h4>
            <NuxtLink :to="`stories/${story.slug}`" class="rounded-full border border-accent absolute">Read</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: ['story'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .story-wrapper {
        margin-right: 280px;
        .image-wrapper {
            z-index: 0;
            max-height: 500px;
            img {
                max-height: 500px;
                width     : auto;
                max-width : none;
            }

        }
        .title {
            z-index: 100;
            height : 90px;
            h4 {
                line-height  : 21px;
                margin-bottom: 3px;
            }
            a {
                font-size  : 15px;
                line-height: 18px;
                padding    : 3px 25px;
                bottom     : -30px;
            }
        }
        &.end {
            padding-bottom: 160px;
            padding-top   : 0px;
        }
        &.start {
            padding-top: 58px;
        }
    }
</style>