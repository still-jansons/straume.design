<template>
    <div class="h-full w-full bg-secondary grid overflow-hidden">
        <div class="bg-primary column-title">
            <div class="h-full flex flex-col justify-between">
                <h2 class="whitespace-pre">{{ title }}</h2>
                <div>
                    <p class="whitespace-pre-line description">{{ story.info }}</p>
                </div>
            </div>
        </div>
        <div class="column-body flex flex-col max-h-screen overflow-hidden">
            <div class="overflow-x-auto flex" style="flex: 1;">
                <div v-for="(image, index) in story.images"
                :key="index"
                :class="{'snap-always snap-start' : mounted}">
                    <img :src="require(`~/assets/images/stories/${story.images_folder}/${image.reference}.jpg`)"
                    :alt="image.info">
                </div>
            </div>
            <div class="overflow-x-auto" style="flex: 1;">
                <div class="story-text-wrapper columns-2xs gap-[40px] h-full text-left px-[20px] pt-[20px]" v-html="file"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { stories } from "@/assets/data/stories.js"
import file from '@/assets/data/text/S_1.txt'
export default {
    name: 'Interior',
    data() {
        return {
            story: stories.find(obj => {
                return obj.slug == this.$route.params.slug
            }),
            mounted: false,
            file
        }
    },
    head() {
        return {
            title: this.story.title,
            meta: [
                {
                    hid: 'interior',
                    name: 'description',
                    content: this.story.info
                }
            ]
        }
    },
    computed: {
        title: function () {
            return this.story.title.replace(/\s+/g, '\n');
        }
    },
    mounted() {
        console.log(file);
        setTimeout(() => {
            this.mounted = true;
        }, "1000");
    }
}
</script>

<style lang="scss" scoped>
    .grid {
        grid-template-columns: 320px 1fr;
    }
    .column-title {
        &:first-child {
            padding  : 140px 40px;
        }
    }
    .column-body {
        padding: 140px 0px;
        img {
            padding-left: 20px;
            height      : 100%;
            width       : auto;
            max-width   : none;
        }
        img:last-child {
            padding-right: 20px;
        }
    }
</style>
