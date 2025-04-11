"use client";
import { Suspense, useState } from "react";
import { useToast } from "../contexts/ToastContext";
import { useSearchParams } from "next/navigation";

function ResetPasswordContent() {
  const { createToast } = useToast();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      createToast({
        title: "Erro",
        description: "As senhas não coincidem",
        type: "error",
        duration: 5000,
      });
      return;
    } else if (password.length < 6) {
      createToast({
        title: "Erro",
        description: "A senha deve ter no mínimo 6 caracteres.",
        type: "error",
        duration: 5000,
      });
      return;
    }
    fetch("https://api.happynationspy.com:3030/auth/resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message || "Erro desconhecido");
          });
        }
        return response.json();
      })
      .then((_data) => {
        createToast({
          title: "Operação concluída",
          description:
            "Sua senha foi alterada. Feche e abre o navegador e logue novamente na extensão.",
          type: "success",
          duration: 5000,
        });
        setPasswordUpdated(true);
      })
      .catch(() =>
        createToast({
          title: "Erro",
          description: "Algo deu errado. Atualize a página e tente novamente.",
          type: "error",
          duration: 5000,
        })
      );
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen bg-gradient-to-r from-purple-800 to-pink-900">
      <img src="/logo.png" alt="logo" className="h-20 w-auto" />
      <div className="p-6 bg-primary shadow-lg rounded-md w-[80%] sm:w-96">
        <h2 className="text-2xl font-bold mb-2">Redefinição de Senha</h2>
        <p className="text-gray-600 mb-4">
          Digite sua nova senha nos campos abaixo.
        </p>
        <input
          type="password"
          placeholder="Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          disabled={passwordUpdated}
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-800 to-pink-900 text-white p-2 rounded hover:bg-pink-200 hover:font-black transition"
        >
          {passwordUpdated ? "Senha alterada" : "Redefinir Senha"}
        </button>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  );
}
