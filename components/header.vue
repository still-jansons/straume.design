<template>
    <div class="header-wrapper">
        <NuxtLink to="/interiors">
            <img src="~/assets/images/Logo.svg" alt="Logo" class="logo">
        </NuxtLink>
        <img src="~/assets/images/LogoText.svg" alt="straume" class="logo-text center">
        <!-- <button class="lang capitalize">LV</button> -->
    </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    position       : fixed;
    top            : 30px;
    left           : 0px;
    right          : 0px;
    display        : flex;
    justify-content: space-between;
    margin         : 0px 40px;
    z-index        : 100;
}
.logo { height: 70px; }
.logo-text {
    height  : 20px;
    top     : 16px;
    position: absolute;
    &.center {
        left     : 50%;
        transform: translate(-50%, 0);
    }
}
button.lang {
    font-size  : 18px;
    line-height: 18px;
    height     : 18px;
    font-weight: 500;
}
</style>