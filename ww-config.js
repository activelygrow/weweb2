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
          },
          linkTarget: {
            label: {
              en: "Link Target",
            },
            type: "String",
            defaultValue: "#",
          },
        },
      },
      bindable: true, // Allows the entire array to be bound dynamically
      defaultValue: [], // Start with an empty array
    },
    textColor: {
      label: {
        en: "Text Color",
      },
      type: "Color",
      defaultValue: "#000000", // Default to black text
      bindable: true,
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
      type: "String",
      defaultValue: "16px",
      bindable: true,
    },
    fontWeight: {
      label: {
        en: "Font Weight",
      },
      type: "String",
      defaultValue: "400",
      bindable: true,
    },
    underlineDistance: {
      label: {
        en: "Underline Distance",
      },
      type: "String",
      defaultValue: "2px",
      bindable: true,
    },
    buttonPaddingVertical: {
      label: {
        en: "Button Vertical Padding",
      },
      type: "String",
      defaultValue: "8px",
      bindable: true,
    },
    buttonPaddingHorizontal: {
      label: {
        en: "Button Horizontal Padding",
      },
      type: "String",
      defaultValue: "16px",
      bindable: true,
    },
  },
};
