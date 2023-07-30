const fs = require("fs");
/** @type {{[p: string]: string|boolean}} */
const args = require("./args");

/**
 * @description
 *
 * @returns {void}
 */
function clean() {

    if (args?.dir?.trim?.()) {
        const path = args.dir.toString();
        if (fs.existsSync(path))
            fs.rmSync(path, {recursive: true});
    }

    if (args?.file?.trim?.()) {
        const path = args.file.toString();
        if (fs.existsSync(path))
            fs.rmSync(path);
    }
}

module.exports = clean;
