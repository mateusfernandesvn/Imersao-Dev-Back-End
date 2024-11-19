import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://picsum.photos/300/200",
    },
    {
        id: 3,
        descricao: "Cachorro fofo fazendo uma careta",
        imagem: "https://picsum.photos/250/300",
    },
    {
        id: 4,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://picsum.photos/300/250",
    },
    {
        id: 5,
        descricao: "Gato preguiçoso tomando sol",
        imagem: "https://picsum.photos/200/200",
    },
    {
        id: 6,
        descricao: "Cidade vibrante à noite",
        imagem: "https://picsum.photos/300/300",
    },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");

});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});