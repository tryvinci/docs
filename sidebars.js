const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/stt',
        'api-reference/translate',
        'api-reference/tts',
        'api-reference/voice',
        'api-reference/lipsync',
        'api-reference/live-portrait',
      ],
    },
  ],
};

module.exports = sidebars; 