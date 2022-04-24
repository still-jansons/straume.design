<template>
    <Stories :stories="interiors" imageFolder="interiors" parentUrl="interiors"/>
</template>
<script>
import { interiors } from "@/assets/data/interiors.js"
export default {
    name: 'Interiors',
    data() {
        return {
            title: 'Interiors',
            interiors
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
