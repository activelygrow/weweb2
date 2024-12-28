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
      type: "Array", // Allows multiple objects in an array
      itemType: {
        type: "Object",
        properties: {
          text: {
            label: {
              en: "Text",
            },
            type: "String",
            defaultValue: "Default text", // Default value for new items
            bindable: true, // Allow users to bind the text dynamically
          },
          type: {
            label: {
              en: "Type",
            },
            type: "Enum", // Dropdown to select between text, link, and button
            options: {
              choices: [
                { value: "text", label: { en: "Text" } },
                { value: "link", label: { en: "Link" } },
                { value: "button", label: { en: "Button" } },
              ],
            },
            defaultValue: "text",
            bindable: true, // Allow users to bind the type dynamically
          },
        },
      },
      bindable: true, // Allow binding of the entire items array
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
      bindable: true, // Allow users to bind the link color dynamically
    },
    buttonBgColor: {
      label: {
        en: "Button Background Color",
      },
      type: "Color",
      defaultValue: "#F23636",
      bindable: true, // Allow users to bind the button background color dynamically
    },
    buttonTextColor: {
      label: {
        en: "Button Text Color",
      },
      type: "Color",
      defaultValue: "#FFFFFF",
      bindable: true, // Allow users to bind the button text color dynamically
    },
  },
};
