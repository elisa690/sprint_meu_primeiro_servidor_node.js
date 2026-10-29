import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('🎀 boas-vindas à Central de Informações da Escola!🎀');
});

app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1});
});

app.get("/escola", (req, res) => {
    res.json({ nome:"Escola Caminhos do Saber", 
    cidade: "São Paulo",
    tipo: "Ensino Técnico",
    });
});

app.get("/cursos", (req, res) => {
    res.json(
        {
            id:1, 
            curso:"Desenvolvimento de Sistemas",
            id:2,
            curso:"Mecânica",
            id:3,
            curso:"Eletromecânica", 
    });
});

app.get("/professor", (req, res) => {
    res.json({ nome:"Carlos Henrique",
    disciplina: "Programação Back-End",
    });
});

app.get("/ajuda", (req, res) => {
    res.send("Rotas disponíveis: GET /status - mostra o status do sistema; GET /escola - mostra informações da instituição; GET /ajuda - mostra as orientações das rotas.");
});

app.get("/requisicao", (req, res) => {
    res.json({
        metodo: req.method,
        caminho: req.path,
        mensagem: "Solicitação recebida com sucesso!"
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});
