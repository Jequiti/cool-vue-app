<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" inverted>
        <q-btn flat dense round @click="janela = !janela" aria-label="Menu">
          <q-icon name="fas fa-bars" />
        </q-btn>

        <q-toolbar-title>
          Cool App
        </q-toolbar-title>
        <router-link to="/" tag="item">
          <q-btn flat dense round class="fixed-right peixe">
            <q-icon name="fas fa-fish" color="neutral" />
          </q-btn>
        </router-link>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="janela">

      <q-list no-border inset-delimiter>
        <q-list-header class="item-janela">Lista</q-list-header>

        <router-link to="/olar" tag="item">

          <q-item class="item-janela">
            <q-item-side>
              <q-icon name="far fa-bell" class="item-janela" />
            </q-item-side>
            <q-item-main>Olar</q-item-main>
          </q-item>

        </router-link>

        <router-link to="/olar" tag="item">

          <q-item class="item-janela">
            <q-item-side>
              <q-icon name="far fa-bell" class="item-janela" />
            </q-item-side>
            <q-item-main>Olar</q-item-main>
          </q-item>

        </router-link>

        <router-link to="/olar" tag="item">

          <q-item class="item-janela">
            <q-item-side>
              <q-icon name="far fa-bell" class="item-janela" />
            </q-item-side>
            <q-item-main>Olar</q-item-main>
          </q-item>

        </router-link>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-layout-footer>
      <q-tabs>
        <q-route-tab slot="title" icon="fas fa-fish" to="/tab1" />
        <q-route-tab slot="title" icon="fas fa-fish" to="/tab2" />
        <q-route-tab slot="title" icon="fas fa-fish" to="/tab3" />
      </q-tabs>
    </q-layout-footer> -->
    <q-fab class="fixed" style="right: 18px; bottom: 18px" color="primary" icon="wifi" direction="left">
      <q-page-sticky>
        <q-btn round color="primary" @click="alert" icon="alarm" />
      </q-page-sticky>
      <q-page-sticky>
        <q-btn round color="primary" @click="alert" icon="alarm" />
      </q-page-sticky>
      <q-page-sticky>
        <q-btn round color="primary" @click="alert" icon="alarm" />
      </q-page-sticky>
      <q-page-sticky>
        <q-btn round color="primary" @click="alert" icon="alarm" />
      </q-page-sticky>
      <q-page-sticky>
        <q-btn round color="primary" @click="alert" icon="alarm" />
      </q-page-sticky>
    </q-fab>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {
      janela: false
    };
  }
};
</script>

<style #scoped>
.peixe {
  margin: 1.1vh 2vh 0 0;
}

.q-layout-drawer {
  background-color: #102c46;
}

.item-janela {
  color: #f5f5f5;
}

.q-item:hover {
  cursor: pointer;
}
</style>
