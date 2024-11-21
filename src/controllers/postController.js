import {getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {

    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch (error) {
        res.status(500).json({ "ERRO": "Falha na requisição" });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao:"",
        imagem: req.file.originalnname,
        alt:""
    };

    try {
        const postCriado = await criarPost(novoPost)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado)
    } catch (erro) {
        res.status(500).json({ "ERRO": "Falha na requisição" });
    }
}


