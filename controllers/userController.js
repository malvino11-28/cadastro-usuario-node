let usuarios = [];
let nextId = 1;

export function createUser(req, res) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios." });
  }

  const dataCadastro = new Date().toISOString().split("T")[0];

  const novoUsuario = {
    id: nextId++,
    nome,
    email,
    dataCadastro,
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
}

export function listUsers(req, res) {
  res.json(usuarios);
}

export function updateUser(req, res) {
  const { id } = req.params;
  const { nome, email } = req.body;

  const usuario = usuarios.find((u) => u.id == id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;

  res.json(usuario);
}

export function deleteUser(req, res) {
  const { id } = req.params;

  const index = usuarios.findIndex((u) => u.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  usuarios.splice(index, 1);

  res.status(204).send();
}
