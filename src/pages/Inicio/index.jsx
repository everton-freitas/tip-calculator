import React, { useState } from "react";
import { Header } from "../../components/Header";
import { ContentDashboard } from "./styles";

const TodoList = () => {
    // Estado para armazenar o valor do input e a lista de tarefas
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Função para adicionar uma tarefa
    const handleAddTask = () => {
        if (!task.trim()) return; // Evita adicionar tarefas vazias
        const newTask = {
            id: Date.now(), // Gera um ID único
            text: task,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTask(""); // Limpa o input
    };

    // Função para alternar a conclusão da tarefa
    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    // Função para remover uma tarefa
    const handleRemoveTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (<>
        <ContentDashboard>
            <Header></Header>
            <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
                <h1>Lista de Tarefas</h1>
                <div>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Digite sua tarefa"
                        style={{ width: "80%", padding: "10px" }}
                    />
                    <button
                        onClick={handleAddTask}
                        style={{ padding: "10px", marginLeft: "5px", backgroundColor: 'darkblue', color: 'white', border: 'none', marginTop: '10px', fontWeight: "500" }}
                    >
                        Adicionar
                    </button>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {tasks.map((t) => (
                        <li
                            key={t.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <span
                                onClick={() => handleToggleComplete(t.id)}
                                style={{
                                    textDecoration: t.completed ? "line-through" : "none",
                                    flex: "1",
                                    cursor: "pointer",
                                }}
                            >
                                {t.text}
                            </span>
                            <button onClick={() => handleRemoveTask(t.id)} style={{ backgroundColor: 'darkblue', color: 'white', border: 'none', fontWeight: "500", padding: '5px'}}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </ContentDashboard>

    </>

    );
};

export default TodoList;