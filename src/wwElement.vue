<template>
  <div class="my-element">
    <p v-for="(item, index) in content.items" :key="index" class="inline-element">
      <template v-if="item.type === 'text'">
        {{ item.text }}
      </template>
      <template v-else-if="item.type === 'link'">
        <a
          href="#"
          :style="{ color: content.linkColor }"
          class="link"
          @click.prevent
        >
          {{ item.text }}
        </a>
      </template>
      <template v-else-if="item.type === 'button'">
        <button
          type="button"
          :style="{ backgroundColor: content.buttonBgColor, color: content.buttonTextColor }"
          class="button"
        >
          {{ item.text }}
        </button>
      </template>
    </p>
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
  align-items: center;

  .inline-element {
    display: inline;
    margin-right: 8px;
    font-size: 16px;
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
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .button:hover {
    background-color: darken($buttonBgColor, 10%);
  }
}
</style>
