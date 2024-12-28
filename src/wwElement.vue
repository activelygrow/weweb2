<template>
<h1 :style="textStyle">My Title</h1>  
</template>
  
<script>
 export default {
  // [...]
  props: {
    content: { type: "Object", required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
  // [...]
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
  
