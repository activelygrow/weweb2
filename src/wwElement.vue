<template>
  <div class="my-element">
    <span class="inline-paragraph">
      <template v-for="(item, index) in content.items || []">
        <!-- Handle text type -->
        <template v-if="item.type === 'text'">
          <span :key="'text-' + index">{{ item.text }}</span>
        </template>

        <!-- Handle link type -->
        <template v-else-if="item.type === 'link'">
          <a
            :key="'link-' + index"
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

        <!-- Add period directly after text or link without spaces -->
        <template v-if="index < content.items.length - 1 && content.items[index + 1].text === '.'">
          <span :key="'period-fix-' + index"></span>
        </template>
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
}

.inline-paragraph {
  display: inline; /* Ensure text and links flow as one continuous line */
  white-space: normal; /* Allow wrapping within a paragraph */
  font-size: inherit;
  line-height: inherit;
}

.inline-element {
  display: inline; /* Ensure elements flow inline */
  margin-right: 0; /* Remove additional margins */
}

.link {
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration 0.2s ease;
}

.link:hover {
  text-decoration: underline;
}
</style>
