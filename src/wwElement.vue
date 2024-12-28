<template>
  <div class="my-element">
    <span
      v-for="(item, index) in content.items"
      :key="index"
      class="inline-element"
      :style="{
        fontWeight: content.fontWeight || 400,
        fontSize: (content.fontSize || 16) + 'px',
        letterSpacing: (content.letterSpacing || 0) + 'px',
        lineHeight: content.lineHeight || 1.5,
      }"
    >
      <!-- Handle text type -->
      <template v-if="item.type === 'text'">
        <span>{{ item.text }}</span>
      </template>

      <!-- Handle link type -->
      <template v-else-if="item.type === 'link'">
        <a
          href="#"
          :style="{
            color: content.linkColor || '#007BFF',
            textUnderlineOffset: (content.underlineDistance || 2) + 'px',
          }"
          class="link"
          @click.prevent
        >
          {{ item.text }}
        </a>
      </template>

      <!-- Handle button type -->
      <template v-else-if="item.type === 'button'">
        <button
          type="button"
          :style="{
            backgroundColor: content.buttonBgColor || '#F23636',
            color: content.buttonTextColor || '#FFFFFF',
            padding:
              (content.buttonPadding.vertical || 8) +
              'px ' +
              (content.buttonPadding.horizontal || 16) +
              'px',
          }"
          class="button"
        >
          {{ item.text }}
        </button>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-element {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .inline-element {
    display: inline-block;
    margin-right: 8px;
  }

  .link {
    text-decoration: none;
    cursor: pointer;
    transition: text-decoration 0.2s ease;
  }

  .link:hover {
    text-decoration: underline;
  }

  .button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .button:hover {
    filter: brightness(90%);
  }
}
</style>
