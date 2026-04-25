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
import config from '@theobroma222/eslint-config';

export default config;
```

:warning: Package "eslint-plugin-react" still not supports eslint 10. So stick with eslint 9
