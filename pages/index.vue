<script>
export default {
    name: 'Home',
    middleware({ redirect }) {
        return redirect('/interiors');
    }
}
</script>
