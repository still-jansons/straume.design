<template>
    <!-- <div class="list h-full overflow-x-auto flex snap-x snap-mandatory"> -->
    <!-- class="story-wrapper flex flex-col snap-always snap-start" -->
    <div class="list h-full overflow-x-auto flex">
        <div v-for="(story, index) in stories"
        :key="index"
        class="story-wrapper flex flex-col"
        :class="story.position_type"
        :style="`align-self: ${story.position_type};`">
            <StoryGallery
            :imagesFolder="`${parentUrl}/${story.images_folder}`"
            :images="story.images"
            :info="story.info"
            :isLastStory="(index > 0 && index + 1 == stories.length)"
            :showInfo="show_info == story.slug"
            :altText="story.title"
            :paginationOnTop="story.position_type == 'end'"/>
            <!-- <ssr-carousel
            loop paginate-by-slide show-dots :gutter="0"
            class="carousel-interior">
                <div v-for="image_title in interior.images"
                :key="image_title"
                class="image-wrapper">
                    <img :src="require(`~/assets/images/${parentUrl}/${interior.images_folder}/${image_title}.jpg`)"
                    :alt="`${interior.title} (${image_title})`"
                    class="h-full"/>
                </div>
            </ssr-carousel> -->
            <div class="title flex justify-between">
                <NuxtLink :to="`${parentUrl}/${story.slug}`">{{ story.title }}</NuxtLink>
                <button v-on:click="show_info = (show_info == story.slug) ? null : story.slug"
                class="uppercase font-medium"
                :class="{'text-accent' : story.show_info}">INFO</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stories', 'parentUrl'],
    data() {
        return {
            show_info: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .story-wrapper {
        padding: 0px 140px;
        .image-wrapper {
            max-height: 500px;
        }
        .title {
            height     : 90px;
            align-items: flex-end;
        }
        &.end {
            flex-direction: column-reverse;
            padding-bottom: 120px;
            padding-top   : 0px;
            .title {
                align-items: flex-start;
            }
        }
        &.start {
            padding-top: 58px;
        }
    }
</style>