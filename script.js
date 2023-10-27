const con = require("express");
const app = con();
const cors = require("cors");
app.use(cors(
    {
        origin: "*",
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
    }
))

const Port = 3000;

const final = [
	{
		clase: "guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		armas:["hacha", "espada", "escudo"]	
	},
    {
        clase: "warlock",
        atributos: {
            fuerza: 10,
            destreza:14,
            inteligencia: 20,
            carisma: 15,
            suerte: 13,
        },
        armas:["varita", "baculo", "grimorio"]
    },
	{
		clase: "paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		Armas:["baculo", "espada", "escudo"]
	}
];

app.get("/", (req,res)=>{
    res.json(final);
}
)

app.listen(Port, ()=> console.log("Escuchando en el puerto" + Port))