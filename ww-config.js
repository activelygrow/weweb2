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
    fontWeight: {
      label: {
        en: "Font Weight",
      },
      type: "Number",
      defaultValue: 400,
      bindable: true,
    },
    fontSize: {
      label: {
        en: "Font Size (px)",
      },
      type: "Number",
      defaultValue: 16,
      bindable: true,
    },
    letterSpacing: {
      label: {
        en: "Letter Spacing (px)",
      },
      type: "Number",
      defaultValue: 0,
      bindable: true,
    },
    lineHeight: {
      label: {
        en: "Line Height",
      },
      type: "Number",
      defaultValue: 1.5,
      bindable: true,
    },
    underlineDistance: {
      label: {
        en: "Underline Distance (px)",
      },
      type: "Number",
      defaultValue: 2,
      bindable: true,
    },
    buttonPadding: {
      label: {
        en: "Button Padding (px)",
      },
      type: "Object",
      properties: {
        vertical: {
          label: {
            en: "Vertical Padding",
          },
          type: "Number",
          defaultValue: 8,
          bindable: true,
        },
        horizontal: {
          label: {
            en: "Horizontal Padding",
          },
          type: "Number",
          defaultValue: 16,
          bindable: true,
        },
      },
      defaultValue: {
        vertical: 8,
        horizontal: 16,
      },
    },
  },
};
