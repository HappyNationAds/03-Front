"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
  useEffect,
} from "react";

// Definindo o tipo do contexto
const ToastContext = createContext({
  createToast: (_toast: ToastOptions) => {}, // Função vazia como valor padrão
});

interface ToastProviderProps {
  children: ReactNode;
}

type ToastOptions = {
  id?: number;
  title?: string;
  description?: string;
  type?: "info" | "success" | "error" | "warning";
  duration?: number;
};

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<
    (ToastOptions & { id: number; exiting: boolean })[]
  >([]);
  // Ref para garantir que a criação do id ocorra apenas no lado do cliente
  const idRef = useRef(0);

  useEffect(() => {
    // A referência é incrementada apenas no cliente
    idRef.current = Date.now();
  }, []);

  const createToast = ({
    title = "",
    description = "",
    type = "info",
    duration = 5000,
  }: ToastOptions) => {
    const id = idRef.current++;
    setToasts((prevToasts) => [
      { id, title, description, type, duration, exiting: false },
      ...prevToasts,
    ]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, exiting: true } : toast
        )
      );
    }, duration - 1000);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ createToast }}>
      {children}
      <ToastList toasts={toasts} />
    </ToastContext.Provider>
  );
};

const ToastList = ({
  toasts,
}: {
  toasts: (ToastOptions & { exiting: boolean })[];
}) => {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {toasts.map(({ id, title, description, type, exiting }) => (
        <div
          key={id}
          className={`p-4 rounded-lg shadow-lg text-white ${
            toastStyles[type || "info"]
          } transform transition-all duration-300 ease-out max-w-xs animate-toast-enter ${
            exiting ? "animate-toast-exit" : ""
          }`}
        >
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

// Definindo os estilos baseados no tipo de toast (info, success, error, etc.)
const toastStyles = {
  info: "bg-blue-500",
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
};
