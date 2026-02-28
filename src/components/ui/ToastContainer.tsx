interface Toast {
  id: number;
  message: string;
}

interface ToastContainerProps {
  toasts: Toast[];
}

export default function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="text-white bg-navy px-5 py-3.5 rounded-lg text-sm font-medium border-l-4 border-cta shadow-xl animate-fade-up max-w-xs"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
