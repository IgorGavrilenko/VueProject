<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item,i) in menuItems" :key="`navdrawer${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app absolute color="primary" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/">
                <v-toolbar-title v-text="'AppLogo'" class="header-logo"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems" flat :key="`menuItems${i}`" :to="item.rout">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        };
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },
        menuItems(){
            return this.isUserAuthenticated
                ? [
                {
                    title: 'Читать',
                    rout: '/articles',
                    icon: 'visibility'
                },
                {
                    title: 'Профиль',
                    rout: '/profile',
                    icon: 'account_circle'
                },
                {
                    title: 'Выход',
                    rout: '/signout',
                    icon: 'exit_to_app'
                }
            ] :
            [
                {
                    title: 'Читать',
                    rout: '/articles',
                    icon: 'visibility'
                },
                {
                    title: 'Вход',
                    rout: '/signin',
                    icon: 'input'
                },
                {
                    title: 'Регистрация',
                    rout: '/signup',
                    icon: 'lock_open'
                }
            ];
        }
    }
}
</script>
<style scoped>
    .header-logo {
        color: #fff;
        text-decoration: none;
    }
</style>
