<template>
    <div>
 <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
              <v-alert
              :value="error"
              type="warning"
              >
              {{error}}

                </v-alert>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Почта"
                    type="email"
                    required
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Пароль"
                    type="password"
                    required
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent='logup'
                >Зарегистрироваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null
        };
    },
    computed: {
        error() {
            return this.$store.getters.getError;
        },
        processing () {
            return this.$store.getters.getProcessing;
        },
        isUserAuthenticated () {
            return this.$store.getters.isUserAuthenticated;
        }
    },
    watch: {
        isUserAuthenticated (val) {
        if(val === true)
            this.$router.push('/');
        }
    },
    methods: {
        logup() {
            this.$store.dispatch('LOGUP', {email: this.email, password: this.password});
        }
    }
}
</script>
<style scoped>

</style>
