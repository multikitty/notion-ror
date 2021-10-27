import React, { useState, useEffect } from 'react';
import SlashMenuRow from './SlashMenuRow';
import matchSorter from 'match-sorter';

const BlockSlashMenu = ({ position }) => {
  const { x, y } = position;

  const menuData = [
    {
      name: 'Text',
      description: 'Just start writing with plain text.',
      blockType: 'paragraph',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/text.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-text.png',
    },
    {
      name: 'To-do list',
      description: 'Track tasks with a to-do list.',
      blockType: 'todo',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/to-do.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-to-do.png',
    },
    {
      name: 'Heading 1',
      description: 'Big section heading.',
      blockType: 'h1',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h1.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h1.png',
    },
    {
      name: 'Heading 2',
      description: 'Medium section heading.',
      blockType: 'h2',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h2.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h3.png',
    },
    {
      name: 'Heading 3',
      description: 'Small section heading.',
      blockType: 'h2',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h3.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h3.png',
    },
    {
      name: 'Bulleted list',
      description: 'Create a simple bulleted list.',
      blockType: 'bulletedList',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/bulleted-list.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-bulleted-list.png',
    },
    {
      name: 'Numbered list',
      description: 'Create a list with numbering.',
      blockType: 'numberedList',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/numbered-list.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-numbered-list.png',
    },
    {
      name: 'Toggle list',
      description: 'Create a list with numbering.',
      blockType: 'toggle',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/toggle.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-toggle.png',
    },

    {
      name: 'Quote',
      description: 'Capture a quote.',
      blockType: 'quote',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/quote.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-quote.png',
    },
    {
      name: 'Divider',
      description: 'Visually divide blocks.',
      blockType: 'divider',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/divider.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-divider.png',
    },
    {
      name: 'Callout',
      description: 'Make writing stand out.',
      blockType: 'callout',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/callout.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-callout.png',
    },
    {
      name: 'Image',
      description: 'Upload or embed with a link.',
      blockType: 'image',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/image.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-image.png',
    },
    {
      name: 'Code',
      description: 'Capture a code snippet.',
      blockType: 'code',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/code.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-code.png',
    },
  ];

  return (
    <div className="slash-menu-wrapper" style={{ left: x, top: y }}>
      <div className="slash-menu">
        <div className="menu-header">Basic blocks</div>
        {menuData.map((item, i) => (
          <SlashMenuRow key={i} item={item} position={position} />
        ))}
      </div>
    </div>
  );
};

export default BlockSlashMenu;
