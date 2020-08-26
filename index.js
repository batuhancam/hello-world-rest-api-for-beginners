'use strict';

const port = 8888, express = require("express"), app = express();

app.use((req, res, next) => {
    res.
    append('Access-Control-Allow-Origin', '*')
    .json(
        {
            message: `Hello ${req.params.name || 'world'}!`
        }
    )
    next();
  });



app.listen(port, () => 
        console.log(`Server started on port ${port}`)
);