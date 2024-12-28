<template>
    <div class="text-container" :style="{ fontSize: fontSize }">
      <!-- Loop through the items array -->
      <template v-for="(item, index) in items" :key="index">
        <!-- Render plain text -->
        <span
          v-if="item.type === 'text'"
          :style="{ color: textColor }"
        >
          {{ item.text }}
        </span>
  
        <!-- Render link -->
        <a
          v-else-if="item.type === 'link'"
          href="#"
          :style="{ color: linkColor }"
          @click.prevent="onLinkClick(item.text)"
        >
          {{ item.text }}
        </a>
  
        <!-- Render button -->
        <button
          v-else-if="item.type === 'button'"
          :style="{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }"
          @click="onButtonClick(item.text)"
        >
          {{ item.text }}
        </button>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      textColor: {
        type: String,
        default: "#000000", // Default text color
      },
      linkColor: {
        type: String,
        default: "#007bff", // Default link color
      },
      buttonBackgroundColor: {
        type: String,
        default: "#f0f0f0", // Default button background color
      },
      buttonTextColor: {
        type: String,
        default: "#000000", // Default button text color
      },
      fontSize: {
        type: String,
        default: "16px", // Default font size
      },
    },
    methods: {
      // Handle link click
      onLinkClick(text) {
        console.log(`Link clicked: ${text}`);
        this.$emit("link-clicked", text); // Emit event for workflows
      },
  
      // Handle button click
      onButtonClick(text) {
        console.log(`Button clicked: ${text}`);
        this.$emit("button-clicked", text); // Emit event for workflows
      },
    },
  };
  </script>
  
  <style>
  /* Style for the text container */
  .text-container {
    display: inline; /* Inline flow for text and elements */
    white-space: normal; /* Allow wrapping */
    line-height: 1.5; /* Consistent spacing */
  }
  
  /* Link hover effect */
  .text-container a:hover {
    text-decoration: underline; /* Underline on hover */
    text-underline-offset: 4px; /* Space underline further */
  }
  
  /* Button hover effect */
  .text-container button {
    display: inline; /* Inline button */
    padding: 2px 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .text-container button:hover {
    filter: brightness(0.9); /* Subtle hover effect */
  }
  </style>
  
