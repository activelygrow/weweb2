module.exports = {
    name: 'Dynamic Text, Link, and Button Renderer',
    category: 'Custom',
    props: {
      items: {
        label: 'Items',
        type: 'array',
        default: [
          { text: 'This is plain text.', type: 'text' },
          { text: 'Click this link', type: 'link' },
          { text: 'Press this button', type: 'button' },
        ],
      },
      textColor: {
        label: 'Text Color',
        type: 'color',
        default: '#000000', // Default black text
      },
      linkColor: {
        label: 'Link Color',
        type: 'color',
        default: '#007bff', // Default blue link
      },
      buttonBackgroundColor: {
        label: 'Button Background Color',
        type: 'color',
        default: '#f0f0f0', // Default light gray button background
      },
      buttonTextColor: {
        label: 'Button Text Color',
        type: 'color',
        default: '#000000', // Default black button text
      },
      fontSize: {
        label: 'Font Size',
        type: 'text',
        default: '16px', // Default font size
      },
    },
  };
  
