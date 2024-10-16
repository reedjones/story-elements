# Story Elements Library

This library provides a comprehensive content model for narrative elements, usable in various contexts. You can install either the ContentLayer integration or the generic version.

## todo 

- [x] create type schemas 
- [x] create contentlayer models 
- [ ] create react component templates / generator 
- [ ] create react components for each entity/type 

<div style="width:100%; height:400px; display:flex; align-items: center;
  justify-content: center;">
  <img src="logo.jpg" alt='story-elements'/>
</div>

## Installation

### ContentLayer version

If you're working with ContentLayer:

```bash
npm install story-elements/content-layer
```

Generic version:

For a plain JavaScript/TypeScript project:

```bash
npm install story-elements/generic
```

Usage

ContentLayer Example:

```javascript
import { Conflict, Theme } from 'story-elements/content-layer';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.md',
  fields: {
    conflict: { type: 'nested', of: Conflict },
    theme: { type: 'nested', of: Theme },
  },
}));```

Generic Example:
```javascript

import { Conflict, Theme } from 'story-elements/generic';

const exampleContent = {
  conflict: {
    description: 'Main user challenge',
    type: 'internal',
  },
  theme: {
    name: 'Innovation',
    description: 'Focus on cutting-edge technology',
  },
};
```
