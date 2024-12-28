export default {
  editor: {
    label: {
      en: "Inline Elements",
    },
  },
  properties: {
    items: {
      label: {
        en: "Items",
      },
      type: "Array",
      itemType: {
        type: "Object",
        properties: {
          text: {
            label: {
              en: "Text",
            },
            type: "String",
            defaultValue: "Default text",
            bindable: true, // Allow user to bind a formula or set text directly
          },
          type: {
            label: {
              en: "Type",
            },
            type: "Enum",
            options: {
              choices: [
                { value: "text", label: { en: "Text" } },
                { value: "link", label: { en: "Link" } },
                { value: "button", label: { en: "Button" } },
              ],
            },
            defaultValue: "text",
            bindable: true, // Allow user to select type dynamically
          },
          color: {
            label: {
              en: "Color",
            },
            type: "Color",
            defaultValue: "#000000", // Default color for text or button
            bindable: true, // Allow user to change color dynamically
          },
        },
      },
      bindable: true, // Make the entire items array bindable
      defaultValue: [
        { text: "This is text", type: "text", color: "#000000" },
        { text: "This is a link", type: "link", color: "#007BFF" },
        { text: "This is a button", type: "button", color: "#F23636" },
      ],
    },
  },
};
