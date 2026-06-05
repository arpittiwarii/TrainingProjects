import Ajv from "ajv";
const ajv = new Ajv({allErrors: true});

const schema = {
    type: "object",
  
    properties: {
      username: {
        type: "string",
        minLength: 3,
        maxLength: 20
      },
  
      age: {
        type: "integer",
        minimum: 18,
        maximum: 100
      },
      role: {
        type: "string",
      
        enum: [
          "USER",
          "ADMIN",
          "MODERATOR"
        ]
      },
      mobile:{
        type:"string",
        pattern: "^[6789][0-9]{9}$"
      }
    },
  
    required: [
      "username",
      "age"
    ],
  
    additionalProperties: false,
    minProperties: 3
  };
  const user = {
    username:"arpit",
    age:18,
    role:"USER",
    mobile:"8517958106"
  } 

const validate = ajv.compile(schema)
// console.log(validate)
const isValid = validate(user)
// console.log(isValid)
if (isValid) {
    console.log("Validation Success");
} else {
    console.log("Validation Failed");

    validate.errors.forEach(error => {
        console.log(error.message);
    });
}
