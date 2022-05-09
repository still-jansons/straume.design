<script>
export default {
    name: 'Home',
    middleware({ redirect }) {
        return redirect('/interiors');
    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
    },
}
</script>
