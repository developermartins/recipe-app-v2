import create from 'zustand';

const useStore = create(set => ({
    popular: [],

    setPopular: (values) => {
        set(() => ({ popular: values }))
    }
}));

export default useStore;
