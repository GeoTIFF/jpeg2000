# jpeg2000
JPEG 2000 Decoding and Encoding Library in JavaScript

# usage
```
const JPEG2000 = require("jpeg2000");

const buffer = fs.readFileSync("./tile.jp2");
const jpeg2000 = JPEG2000.decode(buffer);
```