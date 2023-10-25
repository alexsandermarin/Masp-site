<template>
    <nav>
        <a href="#"><TicketSvg /></a>
        <a href="#"><CalendarioSvg /></a>
        <a href="#"><SearchSvg /></a>
        <a href="#"><MapSvg /></a>
        <a href="#"><ClockSvg /></a>
    </nav>
</template>

<script>

    import TicketSvg from '../icons/TicketSvg.vue';
    import CalendarioSvg from '../icons/CalendarioSvg.vue';
    import SearchSvg from '@/icons/SearchSvg.vue';
    import MapSvg from '@/icons/MapSvg.vue';
    import ClockSvg from '@/icons/ClockSvg.vue';

    export default{
        name: 'NavbarLeft',
        components: {
            TicketSvg,
            CalendarioSvg,
            SearchSvg,
            MapSvg,
            ClockSvg
        }
    }
</script>

<style scoped>
    nav{
        position: fixed;
        width: 51px;
        border-radius: 0 13px 13px 0;
        background-color: #DD3526;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 150px 32px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        align-items: center;
        z-index: 999;
    }
</style>