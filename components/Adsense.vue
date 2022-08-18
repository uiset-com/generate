<template>
    <div ref="adbox">
        <ins class="adsbygoogle"
            style="display:inline-block;width:280px;height:360px"
            data-ad-client="ca-pub-9906622596531689"
            data-ad-slot="6280489549"></ins>
     </div>
</template>

<script>
export default {
    mounted() {
        const adscript = document.createElement("script");
        adscript.setAttribute(
            "src",
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9906622596531689"
        );
        adscript.setAttribute('async', true);
        adscript.setAttribute('crossorigin', 'anonymous');
        adscript.addEventListener('load', () => {
            (adsbygoogle = window.adsbygoogle || []).push({});
        });
        this.$refs.adbox.appendChild(adscript);
        
    },
}
</script>