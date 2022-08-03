<template>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        :width="size" :height="size" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
    <rect x="200" y="200" fill="#E14C50" width="100" height="100"/>
    <rect x="200" fill="#D2393D" width="100" height="100"/>
    <rect x="200" y="100" fill="#DA4246" width="100" height="100"/>
    <rect x="100" y="200" fill="#E95559" width="100" height="100"/>
    <rect fill="#FF7175" width="100" height="100.781"/>
    <rect y="200" fill="#F05E62" width="100" height="100"/>
    <rect y="100" fill="#F8686C" width="100" height="100"/>
</svg>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: '20px'
        }
    }
}
</script>