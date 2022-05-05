<template>
    <div class="list h-full overflow-x-auto flex">
        <Interior v-for="(interior, index) in interiors"
        :key="index"
        :interior="interior"
        :isLastItem="(index > 0 && index + 1 == interiors.length)"
        v-on:slug-change="selected_slug = $event"
        :selectedSlug="selected_slug"/>
    </div>
</template>
<script>
import { interiors } from "@/assets/data/interiors.js"
export default {
    name: 'Interiors',
    data() {
        return {
            title: 'Interiors',
            interiors,
            selected_slug: null
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid    : 'interiors',
                    name   : 'description',
                    content: 'Cataloge with my interirors'
                }
            ]
        }
    }
}
</script>
