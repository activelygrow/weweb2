<template>
  <div class="my-element">
    <span
      v-for="(item, index) in content.items"
      :key="index"
      class="inline-element"
      :style="{
        fontWeight: content.fontWeight,
        fontSize: content.fontSize + 'px',
        letterSpacing: content.letterSpacing + 'px',
        lineHeight: content.lineHeight,
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
            color: content.linkColor,
            textUnderlineOffset: content.underlineDistance + 'px',
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
            backgroundColor: content.buttonBgColor,
            color: content.buttonTextColor,
            padding: content.buttonPadding.vertical + 'px ' + content.buttonPadding.horizontal + 'px',
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
