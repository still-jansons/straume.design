<template>
    <div class="list h-full flex">
        <div v-for="(interior, index) in interiors"
        :key="index"
        class="item-wrapper flex flex-col"
        :class="interior.position_type"
        :style="`align-self: ${interior.position_type};`">
            <div class="gallery-wrapper flex flex-col">
                <div class="image flex">
                    <div v-if="index + 1 == interiors.length && index > 0" class="relative">
                        <div v-show="show_info == interior.slug" class="info-box left bg-primary-variant">
                            <p class="whitespace-pre font-normal">{{ interior.info }}</p>
                        </div>
                    </div>
                    <img :src="require(`~/assets/images/interiors/${interior.images_folder}/${interior.images[interior.selected_image]}.jpg`)">
                    <div v-if="index + 1 < interiors.length" class="relative">
                        <div v-show="show_info == interior.slug" class="info-box right bg-primary-variant">
                            <p class="whitespace-pre font-normal">{{ interior.info }}</p>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <button v-for="(image, index) in interior.images"
                    :key="index"
                    v-on:click="interior.selected_image = index"
                    :class="{ selected: interior.selected_image == index }">
                        <span></span>
                    </button>
                </div>
            </div>
            <!-- <ssr-carousel
            loop paginate-by-slide show-dots :gutter="0"
            class="carousel-interior">
                <div v-for="image_title in interior.images"
                :key="image_title"
                class="image-wrapper">
                    <img :src="require(`~/assets/images/interiors/${interior.images_folder}/${image_title}.jpg`)"
                    :alt="`${interior.title} (${image_title})`"
                    class="h-full"/>
                </div>
            </ssr-carousel> -->
            <div class="title flex justify-between">
                <NuxtLink :to="interior.slug">{{ interior.title }}</NuxtLink>
                <button v-on:click="show_info = (show_info == interior.slug) ? null : interior.slug"
                class="uppercase font-medium"
                :class="{'text-accent' : interior.show_info}">INFO</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Interiors',
    data() {
        return {
            title: 'Interiors',
            interiors: [
                {
                    title         : 'Apartment in Riga',
                    slug          : "apartment_in_riga",
                    images_folder : 'S8',
                    images        : ['S8_1', 'S8_2', 'S8_3', 'S8_4', 'S8_5', 'S8_6', 'S8_7', 'S8_8', 'S8_9'],
                    position_type : 'center',
                    info          : 'Objekts: dzīvoklis Rīgas centrā\nGads: 2020\nPlatība: 70m2\nVieta: Rīga, Latvija \n\nInterjera dizains: Annija Straume \n3D vizualizācijas: Ingus Rinka',
                    selected_image: 0,
                },
                {
                    title         : 'Out-of-town residence',
                    slug          : "out_of_town_residence",
                    images_folder : 'K20',
                    images        : ['K20_1', 'K20_2', 'K20_3', 'K20_4', 'K20_5', 'K20_6', 'K20_7'],
                    position_type : 'end',
                    info          : 'Objekts: 19.gs dzīvojamā māja\nGads: 2020 - ...\nPlatība: 400m2\nVieta: Latvija \n\nInterjera dizains: Annija Straume \n3D vizualizācijas: Ingus Rinka',
                    selected_image: 0,
                },
                {
                    title         : 'Family home',
                    slug          : "family_home",
                    images_folder : 'D14',
                    images        : ['D14_1', 'D14_2', 'D14_3', 'D14_4', 'D14_5', 'D14_6', 'D14_7'],
                    position_type : 'start',
                    info          : 'Objekts: dzīvojamā māja Rīgā\nGads: 2021\nPlatība: 134m2\nVieta: Riga, Latvia\n\nInterjera dizains: Annija Straume, Anna Miezīte\n3D vizualizācijas: Ingus Rinka',
                    selected_image: 0,
                },
                {
                    title         : 'Out-of-town family home',
                    slug          : "out_of_town_family_home",
                    images_folder : 'A6',
                    images        : ['A6_1', 'A6_2', 'A6_3', 'A6_4', 'A6_5'],
                    position_type : 'end',
                    info          : 'Objekts: dzīvojamā māja\nGads: 2020 - ...\nPlatība: 250m2\nVieta: Latvia\n\nInterjera dizains: Annija Straume\n3D vizualizācijas: Ingus Rinka',
                    selected_image: 0,
                },
                {
                    title         : 'Family home',
                    slug          : "family_home_ramava",
                    images_folder : 'L10',
                    images        : ['L10_1', 'L10_2', 'L10_3', 'L10_4'],
                    position_type : 'center',
                    info          : 'Objekts: dzīvojamā māja Ramava\nGads: 2021\nPlatība: 126m2\nVieta: Ramava, Latvia\n\nInterjera dizains: Annija Straume, Anna Miezīte\n3D vizualizācijas: Ingus Rinka',
                    selected_image: 0,
                },
            ],
            show_info: null
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'interiors',
                    name: 'description',
                    content: 'Cataloge with my interirors'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .item-wrapper {
        padding: 0px 140px;
        .image-wrapper {
            max-height: 500px;
        }
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
        }
        .title {
            height: 90px;
            align-items: flex-end;
        }
        &.end {
            flex-direction: column-reverse;
            padding-bottom: 120px;
            padding-top   : 0px;
            .gallery-wrapper {
                flex-direction: column-reverse;
                .info-box {
                    top   : 0px;
                    bottom: auto;
                }
                .pagination {
                    margin-top : 0px;
                    margin-bottom: 13px;
                }
            }
            .title {
                align-items: flex-start;
            }
        }
        &.start {
            padding-top: 58px;
        }
    }
</style>
