<template>
    <div class="h-full w-full bg-secondary grid overflow-hidden">
        <div class="bg-primary column-title">
            <div class="h-full flex flex-col justify-between">
                <h2 class="whitespace-pre">{{ title }}</h2>
                <div>
                    <p class="whitespace-pre-line description">{{ interior.info }}</p>
                </div>
            </div>
        </div>
        <div class="column-body flex max-h-screen"
        :class="{'overflow-x-auto snap-x snap-mandatory' : mounted}">
            <div v-for="(image, index) in interior.images"
            :key="index"
            :class="{'snap-always snap-start' : mounted}">
                <img :src="require(`~/assets/images/interiors/${interior.images_folder}/${image}.jpg`)"
                :alt="`${interior.title} (${image})`">
            </div>
        </div>
    </div>
</template>
<script>
import { interiors } from "@/assets/data/interiors.js"
export default {
    name: 'Interior',
    data() {
        return {
            interior: interiors.find(obj => {
                return obj.slug == this.$route.params.slug
            }),
            mounted: false
        }
    },
    head() {
        return {
            title: this.interior.title,
            meta: [
                {
                    hid: 'interior',
                    name: 'description',
                    content: this.interior.info
                }
            ]
        }
    },
    computed: {
        title: function () {
            return this.interior.title.replace(/\s+/g, '\n');
        }
    },
    mounted() {
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
            padding-left: 10px;
            height      : 100%;
            width       : auto;
            max-width   : none;
        }
        img:last-child {
            padding-right: 10px;
        }
    }
</style>
