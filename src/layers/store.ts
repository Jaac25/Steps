import create from 'zustand'

export interface IStore {
    names: string,
    setName(names: string): void;
    email: string,
    setEmail(email: string): void;
    address: string,
    setAddress(address: string): void;
    floor: number,
    setFloor(floor: number): void;
    zone: string
    setZone(zone: string): void;
    step: number,
    nextStep(): void;
    previousStep(): void;
}

export const store = create<IStore>(set => ({
    names: "",
    setName: (name: string) => set(state => ({ names: name})),
    email: "",
    setEmail: (email: string) => set(state => ({ email: email})),
    address: "",
    setAddress: (address: string) => set(state => ({ address: address})),
    floor: -1,
    setFloor: (floor: number) => set(state => ({ floor: floor})),
    zone: "",
    setZone: (zone: string) => set(state => ({ zone: zone})),
    step: 0,
    nextStep: () => set(state => ({step: state.step + 1})),
    previousStep: () => set(state => ({step: state.step - 1})),
    clean: () => set({ 
        names: "",
        email: "",
        address: "",
        floor: -1,
        zone: "",
    })
}))