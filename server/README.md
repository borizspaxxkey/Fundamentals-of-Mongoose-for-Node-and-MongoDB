yarn add express
yarn add body-parser
yarn add cors
yarn add mongoose
yarn add eslint

<!-- node ./node*modules/eslint/bin/eslint.js --init // configure eslint -->

yarn add morgan
yarn add nodemon
yarn add material-design-icons-iconfont
yarn add axios
// "start": "npm run lint & nodemon app.js",

<!-- // *node_modules/* to ignore node modules -->

compose.com // database as a service

// To create a document
const personSchema = new mongoose.Schema({
firstName:String,
lastName:String
});

const Person = mongoose.model('Person',personShema);

const zevia = new Person({
firstName:'Zevia',
lastName: 'Cola'
});
