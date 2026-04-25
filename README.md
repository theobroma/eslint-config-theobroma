# This package provides Theobroma's eslint 9+ shared config

## Versioning strategy

- breaking rule changes → major
- new rules → minor
- tweaks → patch

### Usage in a project

Install package:

```bash
npm install -D @theobroma222/eslint-config
```

Install peerDependencies:

```bash
npm install -D \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-prettier \
  eslint-config-prettier \
  prettier
```

Create eslint.config.js:

```JavaScript
import config from '@theobroma222/eslint-config';

export default config;
```

package.json:

```json
{
  "prettier": "eslint-config-yourname/prettier"
}
```

:warning: Package "eslint-plugin-react" still not supports eslint 10. So stick with eslint 9
