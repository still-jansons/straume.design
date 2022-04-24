<template>
    <div class="gallery-wrapper flex flex-col"
    :class="{reverse: paginationOnTop}">
        <div class="image flex"
        :class="{'flex-row-reverse': isLastStory}">
            <img :src="require(`~/assets/images/${imagesFolder}/${images[selected_image]}.jpg`)"
            :alt="`${altText} (${images[selected_image]})`">
            <div class="relative">
                <div v-show="showInfo"
                class="info-box bg-primary-variant"
                :class="isLastStory ? 'left' : 'right'">
                    <p class="whitespace-pre font-normal">{{ info }}</p>
                </div>
            </div>
        </div>
        <div class="pagination">
            <button v-for="(image, index) in images"
            :key="index"
            :class="{ selected: selected_image == index }"
            :aria-label="`Image ${index + 1}`"
            v-on:click="selected_image = index">
                <span aria-hidden="true"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'imagesFolder',
        'images',
        'info',
        'isLastStory',
        'showInfo',
        'altText',
        'paginationOnTop'
    ],
    data() {
        return {
            selected_image: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .gallery-wrapper {
        img {
            height   : 500px;
            width    : auto;
            max-width: none;
        }
        .info-box {
            position: absolute;
            bottom  : 0px;
            padding : 40px;
            &.left {
                right: 0px;
            }
            &.right {
                left: 0px;
            }
        }
        .pagination {
            display    : flex;
            align-items: center;
            margin-top : 13px;
            button {
                display     : inline-flex;
                margin-right: 15px;
                span {
                    height          : 10px;
                    width           : 10px;
                    border          : 1px solid black;
                    border-radius   : 50%;
                    background-color: transparent;
                    margin          : 0px 5px;
                }
                &.selected span {
                    background-color: black
                }
            }
            button:first-child span {
                margin-left: 0px; 
            }
        }
        &.reverse {
            flex-direction: column-reverse;
            .info-box {
                top   : 0px;
                bottom: auto;
            }
            .pagination {
                margin-top   : 0px;
                margin-bottom: 13px;
            }
        }
    }
</style>