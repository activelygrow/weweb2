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
            bindable: true,
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
            bindable: true,
          },
        },
      },
      bindable: true,
      defaultValue: [
        { text: "This is text", type: "text" },
        { text: "This is a link", type: "link" },
        { text: "This is a button", type: "button" },
      ],
    },
    linkColor: {
      label: {
        en: "Link Color",
      },
      type: "Color",
      defaultValue: "#007BFF",
      bindable: true,
    },
    buttonBgColor: {
      label: {
        en: "Button Background Color",
      },
      type: "Color",
      defaultValue: "#F23636",
      bindable: true,
    },
    buttonTextColor: {
      label: {
        en: "Button Text Color",
      },
      type: "Color",
      defaultValue: "#FFFFFF",
      bindable: true,
    },
    fontSize: {
      label: {
        en: "Font Size",
      },
      type: "String", // Allows text input for values like "1rem" or "10px"
      defaultValue: "16px",
      bindable: true,
    },
    buttonPaddingVertical: {
      label: {
        en: "Button Vertical Padding",
      },
      type: "String", // Allows text input
      defaultValue: "8px",
      bindable: true,
    },
    buttonPaddingHorizontal: {
      label: {
        en: "Button Horizontal Padding",
      },
      type: "String", // Allows text input
      defaultValue: "16px",
      bindable: true,
    },
  },
};
