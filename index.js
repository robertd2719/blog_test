const express = require('express');

app = new express();
app.use(express.static('public'));

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT}`);
});
