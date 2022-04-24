<template>
    <div id="containerPhilosophy"
    class="h-full w-full bg-primary-variant flex flex-col justify-between">
        <h1 class="text-white font-medium">{{ title }}</h1>
        <div class="body columns-2">
            <p v-for="(text, index) in body"
            :key="index"
            class="text-justify">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Philosophy',
    data() {
        return {
            title: 'Evironments that strengthen life',
            body: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ]
        }
    },
    head() {
        return {
            title: 'My philiosphy',
            meta: [
                {
                    hid: 'philosophy',
                    name: 'description',
                    content: this.title
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    #containerPhilosophy {
        padding: 170px 0px 250px;
        h1 {
            padding-left: 140px;
        }
        .body {
            padding: 0px 140px;
            gap: 90px;
            p {
                line-height: 23px;
            }
        }
    }
</style>