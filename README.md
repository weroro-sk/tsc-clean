# tsc-clean

Small and simple lib for cleaning build files and folders before or after node builds (**tsc** (_typescript_), **webpack**, etc.).

The library is usable on Windows and Unix-like systems (macos, linux, ...)

## Installation

| Manager                                                                                                                                                                                   | Command                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| <img width="60px" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="NPM">                                                                                       | `npm install -D tsc-clean` |
| <img width="60px" src="https://raw.githubusercontent.com/yarnpkg/assets/76d30ca2aebed5b73ea8131d972218fb860bd32d/yarn-kitten-full.svg" alt="YARN">                                        | `yarn add -D tsc-clean`    |
| <img width="60px" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" alt="PNPM"> | `pnpm add -D tsc-clean`    |

## Usage

### Command line

`npx tsc-clean [--arguments]`

#### example:
`npx tsc-clean --dir=dir_path`

`npx tsc-clean --file=file_path`

`npx tsc-clean --dir=dir_path --file=file_path`



### Javascript

```javascript
const clean = require('tsc-clean');

clean({dir: 'dir_path'});

clean({file: 'file_path'});

clean({dir: 'dir_path', file: 'file_path'});
```
---

Argument **dir** is always recursive

---

## Use in practice
(package.json)

```json
{
  "scripts": {
    "prebuild": "tsc-clean --dir=lib",
    "build": "tsc",
    "build:pack": "npm run build && npm pack"
  }
}
```
