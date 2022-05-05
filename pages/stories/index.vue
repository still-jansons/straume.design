<template>
    <div class="h-full w-full bg-secondary overflow-hidden">
        <div class="flex h-full overflow-x-auto">
            <div class="column-info flex flex-col justify-between">
                <h1>{{ title }}</h1>
                <p>{{ body }}</p>
            </div>
            <div class="column-stories flex">
                <Story v-for="story in stories"
                :key="story.slug"
                :story="story"/>
            </div>
        </div>
    </div>
</template>

<script>
import { stories } from "@/assets/data/stories.js"
export default {
    name: 'Stories',
    data() {
        return {
            title  : "In the circle of current events in contemporary design.",
            body   : "Studio’s founder Annija Straume occasionaly writes educational pieces on symbiosis of design, purposeful inovations and nature, giving a glimpse into an in-depth understanding of design to both professionals of the field and curious passers by.",
            stories
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'stories',
                    name: 'description',
                    content: this.body
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .column-info {
        z-index  : 10;
        min-width: 50%;
        padding  : 180px 0px 250px 140px;
        p {
            max-width  : 360px;
            line-height: 23px;
        }
    }
    .column-stories {
        margin-left: -60px;
    }
</style>