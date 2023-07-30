const fs = require("fs");

/**
 * @description
 *
 * @param {{dir?: string, file?: string}} args
 * @returns {void}
 */
function clean({dir, file}) {

    if (dir?.trim?.()) {
        const path = dir.toString();
        if (fs.existsSync(path))
            fs.rmSync(path, {recursive: true});
    }

    if (file?.trim?.()) {
        const path = file.toString();
        if (fs.existsSync(path))
            fs.rmSync(path);
    }
}

module.exports = clean;
