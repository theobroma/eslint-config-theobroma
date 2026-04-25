# This package provides Theobroma's eslint 9+ shared config

## Versioning strategy

- breaking rule changes → major
- new rules → minor
- tweaks → patch

### Usage in a project

```bash
npm install -D @theobroma222/eslint-config
```

Create eslint.config.js:

```JavaScript
import base from "@theobroma222/eslint-config";
import ts from "@theobroma222/eslint-config/ts";
import react from "@theobroma222/eslint-config/react";

export default [
  ...base,
  ...ts,
  ...react
];
```
