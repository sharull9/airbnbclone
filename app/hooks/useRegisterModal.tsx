import { create } from "zustand";

type RegisterModal = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRegisterModal = create<RegisterModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
