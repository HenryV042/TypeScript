# 🚀 Iniciando com TypeScript no Terminal

Este é um tutorial básico para começar a usar o TypeScript no terminal, com foco na criação de tipos personalizados usando `type`.

---

## ✅ Instale o TypeScript

```bash
npm install -g typescript
````

Isso instalará o compilador `tsc` globalmente.

---

## 📁 Crie uma pasta de testes

```bash
mkdir ts-tutorial
cd ts-tutorial
```

---

## 📝 Crie um arquivo `index.ts`

```bash
touch index.ts
```

Ou no Windows:

```bash
echo. > index.ts
```

---

## 🧠 Exemplo básico com `type`

Abra o arquivo `index.ts` e cole o seguinte código:

```ts
type Nome = string;

type Usuario = {
  id: number;
  nome: Nome;
  ativo: boolean;
};

const user: Usuario = {
  id: 1,
  nome: "Lucas",
  ativo: true
};

console.log(user);
```

---

## 🛠️ Compile com verificação de erro (`--noEmitOnError`)

```bash
tsc index.ts --noEmitOnError
```

> Este comando garante que, se houver algum erro no seu código TypeScript, o JavaScript **não será gerado**.

---

## ▶️ Execute com Node.js

```bash
node index.js
```

Se não houver erros, o terminal exibirá:

```bash
{ id: 1, nome: 'Lucas', ativo: true }
```

---

## 🔁 Modo automático de compilação

Use o modo "watch" para recompilar automaticamente quando salvar o arquivo:

```bash
tsc index.ts --watch --noEmitOnError
```

---

## 📦 Dica: inicialize um projeto com `tsconfig.json`

```bash
tsc --init
```

No arquivo `tsconfig.json`, você pode configurar `noEmitOnError` permanentemente:

```json
{
  "compilerOptions": {
    "noEmitOnError": true,
    "target": "es6"
  }
}
```

---

## 🧩 Conclusão

Com isso, você já pode criar e testar seus próprios tipos usando `type` no TypeScript de forma segura e produtiva no terminal!
