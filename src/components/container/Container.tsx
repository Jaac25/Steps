import "./style.css"

export interface IContainer {
    children: React.ReactNode;
    size: 30 | 50 | 70 | 100
}

export const Container = ({size,children}: IContainer) => {
    return <div className={`container w-${size}`}>
        {children}
    </div>
}