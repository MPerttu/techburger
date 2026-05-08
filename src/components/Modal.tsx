import type { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-lg w-full relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-slate-500 hover:text-slate-900 text-3xl font-bold z-50 leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
