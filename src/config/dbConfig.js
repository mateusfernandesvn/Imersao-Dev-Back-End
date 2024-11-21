import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do  bd");
        await mongoClient.connect();
        console.log("Conectado ao bd");

        return mongoClient;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados", error);
        process.exit();
    }
}