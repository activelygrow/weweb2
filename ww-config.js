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
        },
      },
      defaultValue: [
        { text: "This is a text", type: "text" },
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
    },
    buttonBgColor: {
      label: {
        en: "Button Background Color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    buttonTextColor: {
      label: {
        en: "Button Text Color",
      },
      type: "Color",
      defaultValue: "#FFFFFF",
    },
  },
};
