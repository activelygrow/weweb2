<template>
  <div class="my-element">
    <span class="inline-paragraph">
      <template v-for="(item, index) in content.items || []" :key="index">
        <!-- Handle text type -->
        <template v-if="item.type === 'text'">
          <span
            :style="{ 
              color: validateStyle(content.textColor, '#000000'), 
              fontWeight: validateStyle(content.fontWeight, '400') 
            }"
          >
            {{ item.text }}
          </span>
        </template>

        <!-- Handle link type -->
        <template v-else-if="item.type === 'link'">
          <a
            :href="validateStyle(item.linkTarget, '#')"
            :style="{ 
              color: validateStyle(content.linkColor, '#007BFF'), 
              textUnderlineOffset: validateStyle(content.underlineDistance, '2px'), 
              fontWeight: validateStyle(content.fontWeight, '400') 
            }"
            class="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.text }}
          </a>
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

.link {
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration 0.2s ease;
  display: inline; /* Ensure links appear inline with other text */
}

.link:hover {
  text-decoration: underline;
}
</style>
