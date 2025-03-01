<template>
  <div class="varlet-site-header">
    <div class="varlet-site-header__lead">
      <img class="varlet-site-header__logo" :src="config.logo" @click="backRoot"/>
      <div class="varlet-site-header__title" v-if="title" @click="backRoot">{{ title }}</div>
    </div>

    <div class="varlet-site-header__tail">
      <div
        class="varlet-site-header__versions"
        @mouseenter="isOpenVersionsMenu = true"
        @mouseleave="isOpenVersionsMenu = false"
        v-if="isShowVersion"
      >
        <span style="font-size: 16px;">{{ currentVersion }}</span>
        <var-icon name="chevron-down"/>
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list varlet-site-header__animation-versions var-elevation--5"
            v-show="isOpenVersionsMenu"
            :style="{ pointerEvents: isOpenVersionsMenu ? 'auto' : 'none' }"
          >
            <var-cell
              v-for="(i, key) in versionItems"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': currentVersion === i.label }"
              @click="open(i.link)"
            >
            {{ i.label }}
            </var-cell>
          </div>
        </transition>
      </div>

      <a class="varlet-site-header__link" style="margin-right: 8px;" target="_blank" :href="changelog" v-ripple v-if="changelog">
        <var-icon name="history" :size="28"/>
      </a>
      <a class="varlet-site-header__link" target="_blank" :href="playground" v-ripple v-if="playground">
        <var-icon name="code-json" :size="24"/>
      </a>
      <a class="varlet-site-header__link" target="_blank" :href="github" v-ripple v-if="github">
        <var-icon name="github" :size="28"/>
      </a>
      <div class="varlet-site-header__theme" v-ripple v-if="darkMode" @click="toggleTheme">
        <var-icon
          size="26px"
          :name="currentTheme === 'lightTheme' ? 'white-balance-sunny' : 'weather-night'"
          :style="{
            marginBottom: currentTheme === 'darkTheme' && '2px',
            marginTop: currentTheme === 'lightTheme' && '2px',
          }"
        />
      </div>
      <div
        class="varlet-site-header__language"
        @mouseenter="isOpenLanguageMenu = true"
        @mouseleave="isOpenLanguageMenu = false"
        v-if="languages"
      >
        <var-icon name="translate" :size="26"/>
        <var-icon name="chevron-down"/>
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list var-elevation--5"
            v-show="isOpenLanguageMenu"
            :style="{ pointerEvents: isOpenLanguageMenu ? 'auto' : 'none' }"
          >
            <var-cell
              v-for="(value, key) in nonEmptyLanguages"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': language === key }"
              @click="handleLanguageChange(key)"
            >{{ value }}
            </var-cell>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import config from '@config'
import { ref, computed, defineComponent } from 'vue'
import { get } from 'lodash-es'
import { getBrowserTheme, getPCLocationInfo, Theme, watchTheme } from '@varlet/cli/client'
import { setTheme } from '../../utils'
import { removeEmpty } from '../../utils'
import { useRouter } from 'vue-router'
import type { Ref, ComputedRef } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  props: {
    language: {
      type: String,
    }
  },
  setup() {
    const title: Ref<string> = ref(get(config, 'title'))
    const logo: Ref<string> = ref(get(config, 'logo'))
    const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
    const currentVersion: Ref<string> = ref(get(config, 'pc.header.currentVersion'))
    const versions = get(config, 'pc.header.versions') 
    const isShowVersion: Ref<boolean> = ref(!!versions)
    const versionItems: Ref<Array<Record<string, any>>> = ref((versions ?? []).find((i: any) => window.location.host.includes(i.name))?.items ?? versions?.[0]?.items ?? [])
    const playground: Ref<string> = ref(get(config, 'pc.header.playground'))
    const github: Ref<string> = ref(get(config, 'pc.header.github'))
    const changelog: Ref<string> = ref(get(config, 'pc.header.changelog'))
    const redirect = get(config, 'pc.redirect')
    const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
    const currentTheme = ref(getBrowserTheme())

    const isOpenLanguageMenu: Ref<boolean> = ref(false)
    const isOpenVersionsMenu: Ref<boolean> = ref(false)
    const router = useRouter()
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))

    const backRoot = () => {
      const { language: lang } = getPCLocationInfo()
      router.replace(`/${lang}${redirect}`)
    }

    const handleLanguageChange = (language: string) => {
      const { menuName } = getPCLocationInfo()
      router.replace(`/${language}/${menuName}`)
      isOpenLanguageMenu.value = false
    }

    const setCurrentTheme = (theme: Theme) => {
      currentTheme.value = theme
      setTheme(config, currentTheme.value)
      window.localStorage.setItem(get(config, 'themeKey'), currentTheme.value)
    }

    const getThemeMessage = () => ({ action: 'theme-change', from: 'pc', data: currentTheme.value })

    const toggleTheme = () => {
      setCurrentTheme(currentTheme.value === 'darkTheme' ? 'lightTheme' : 'darkTheme')

      window.postMessage(getThemeMessage(), '*')
      notifyThemeChange('mobile')
    }

    const notifyThemeChange = (target: 'mobile' | 'window') => {
      const contentWindow = target === 'window' ? window : (document.getElementById(target) as HTMLIFrameElement | undefined)?.contentWindow
      if (!contentWindow) {
        return
      }

      contentWindow.postMessage(getThemeMessage(), '*')
    }

    const open = (value: string) => {
      window.location.href = value
    }

    watchTheme((theme, from) => {
      if (from === 'mobile') {
        setCurrentTheme(theme)
      }

      if (from === 'playground') {
        setCurrentTheme(theme)
        notifyThemeChange('mobile')
      }
    })

    setTheme(config, currentTheme.value)
    notifyThemeChange('window')

    return {
      logo,
      config,
      title,
      currentVersion,
      languages,
      isShowVersion,
      versionItems,
      nonEmptyLanguages,
      playground,
      changelog,
      github,
      isOpenLanguageMenu,
      isOpenVersionsMenu,
      darkMode,
      currentTheme,
      open,
      backRoot,
      handleLanguageChange,
      toggleTheme,
    }
  },
})
</script>

<style lang="less">
.varlet-site-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  justify-content: space-between;
  user-select: none;
  z-index: 9;
  background: var(--site-config-color-bar);
  border-bottom: 1px solid var(--site-config-color-border);
  box-sizing: border-box;

  &__lead {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__logo {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    flex-shrink: 0;
    transition: 0.3s all ease-in-out;
  }

  &__title {
    font-size: 22px;
    margin-right: 12px;
  }

  &__tail {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 562px) {
    &__tail {
      display: none;
    }
  }

  &__language {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__versions {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 18px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 4px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__link {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--site-config-color-text);
    transition: background-color 0.25s;
    margin-right: 6px;

    a {
      text-decoration: none;
    }

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__theme {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 4px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__animation-list {
    background: var(--site-config-color-bar);
    cursor: pointer;
    color: var(--site-config-color-text);
    border-radius: 2px;
    position: absolute;
    top: 40px;
    left: -20px;

    .var-cell {
      width: 100px !important;
      color: var(--site-config-color-text);

      &__content {
        color: inherit !important;
      }
    }

    &--active {
      background: var(--site-config-color-pc-language-active-background) !important;
      color: var(--site-config-color-pc-language-active) !important;
    }
  }

  &__animation-versions {
    left: -7px;
  }
}
</style>

<style lang="less" scoped>
.fade-enter-active {
  animation-name: fade-in;
  animation-duration: 0.3s;
}

.fade-leave-active {
  animation-name: fade-leave;
  animation-duration: 0.3s;
}

@keyframes fade-in {
  0% {
    top: 30px;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}

@keyframes fade-leave {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: 30px;
    opacity: 0;
  }
}
</style>
