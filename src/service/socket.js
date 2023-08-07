import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin: "https://timeyouback.up.railway.app/"
    }
});

io.on("connection", (socket) => {
console.log("alguien se ha conectado");

socket.on("desconectado", () =>{
    console.log("alguien se ha ido")
})

});

io.listen(3001);