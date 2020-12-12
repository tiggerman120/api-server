# code review notes

index file needs mongoose and expres pulled in
dotenv sets up the port

mongoose wraps around mongo tomake it easier for us to interact with mongo

by wrapping mongo and mongoose in the food model it

const options is options built into mongoose that we want to use but dont need to know what they are yet

setup mongo database

turn db on get it running give it a name
make a schema
mycollection is going to be an array of objects and i want them to look like my schema

when you export your schema you're creating mycollection and giving...

by creating a new instance of the model we are creating a new instance of the schema

a schema is the outline of what you want your data to look like


make a schema
the mongoose model is made up of a string and a schema use the mongoose model to make your own model
make a foodcollection model
the string becomes the name of your collection in mongodb
mongoose uses find findone etc
my model is translating the get into mongoose words

