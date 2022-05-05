<template>
    <div class="interior-wrapper flex flex-col"
    :class="interior.position_type"
    :style="`align-self: ${interior.position_type};`">
        <InteriorGallery
        :imagesFolder="`interiors/${interior.images_folder}`"
        :images="interior.images"
        :info="interior.info"
        :isLastItem="isLastItem"
        :showInfo="selectedSlug == interior.slug"
        :altText="interior.title"
        :paginationOnTop="interior.position_type == 'end'"/>
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
            <NuxtLink :to="`interiors/${interior.slug}`">{{ interior.title }}</NuxtLink>
            <button v-on:click="$emit('slug-change', selectedSlug == interior.slug ? null : interior.slug)"
            class="uppercase font-medium"
            :class="{'text-accent' : showInfo == interior.slug}">INFO</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['interior', 'isLastItem', 'selectedSlug'],
    data() {
        return {
            show_info: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .interior-wrapper {
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