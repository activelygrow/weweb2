<template>
  <div class="my-element">
    <span v-for="(item, index) in content.items" :key="index" class="inline-element">
      <!-- Handle text type -->
      <template v-if="item.type === 'text'">
        <span :style="{ color: item.color }">{{ item.text }}</span>
      </template>

      <!-- Handle link type -->
      <template v-else-if="item.type === 'link'">
        <a
          href="#"
          :style="{ color: item.color }"
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
            backgroundColor: item.color,
            color: '#FFFFFF', // Text color inside the button is always white
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
  gap: 8px; /* Space between inline elements */

  .inline-element {
    display: inline-block;
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
    filter: brightness(90%);
  }
}
</style>
