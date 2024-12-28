<template>
  <div class="my-element">
    <span
      v-for="(item, index) in content.items || []"
      :key="index"
      class="inline-element"
      :style="{ 
        fontSize: validateStyle(content.fontSize, '16px'), 
        fontWeight: validateStyle(content.fontWeight, '400') 
      }"
    >
      <!-- Handle text type -->
      <template v-if="item.type === 'text'">
        <span>{{ item.text }}</span>
      </template>

      <!-- Handle link type -->
      <template v-else-if="item.type === 'link'">
        <a
          :href="validateStyle(item.linkTarget, '#')"
          :style="{ 
            color: validateStyle(content.linkColor, '#007BFF'), 
            textUnderlineOffset: validateStyle(content.underlineDistance, '2px') 
          }"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.text }}
        </a>
      </template>

      <!-- Handle button type -->
      <template v-else-if="item.type === 'button'">
        <button
          type="button"
          :style="{
            backgroundColor: validateStyle(content.buttonBgColor, '#F23636'),
            color: validateStyle(content.buttonTextColor, '#FFFFFF'),
            padding: validateStyle(content.buttonPaddingVertical, '8px') + ' ' + validateStyle(content.buttonPaddingHorizontal, '16px'),
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
  methods: {
    // Validate styles to avoid crashes or undefined values
    validateStyle(value, defaultValue) {
      return value && typeof value === "string" ? value : defaultValue;
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
