import create from 'zustand';

const useStore = create(set => ({
    darkMode: false,

    setDark: () => {
        set((state) => ({ darkMode: !state.darkMode }));
    }

}));

export default useStore;
