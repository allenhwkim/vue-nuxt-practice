<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" :href="'/' + $i18n.locale">Portfolio</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" :to="'/' + $i18n.locale">{{ $t('links.home') }}</nuxt-link>
          <nuxt-link class="navbar-item" :to="'/' + $i18n.locale + '/about'">{{ $t('links.about') }}</nuxt-link>
          <nuxt-link class="navbar-item" :to="'/' + $i18n.locale + '/projects'">{{ $t('links.projects') }}</nuxt-link>
          <nuxt-link class="navbar-item" :to="'/' + $i18n.locale + '/contact'">{{ $t('links.contact') }}</nuxt-link>

          <nuxt-link class="navbar-item" v-if="$i18n.locale === 'en'" to="/fr">Français</nuxt-link>
          <nuxt-link class="navbar-item" v-if="$i18n.locale === 'fr'" to="/en">English</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>
