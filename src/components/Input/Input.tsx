import "./style.css"

export interface IInput {
    label: string;
    onChange: (value: string) => void,
    type: "text" | "number" | "email"
}

const validateKey = (e: any) => {
    const regex = /^\d+$/;
    const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
      e.preventDefault();
      return false;
    }
};

export const Input = ({label, type, onChange}:IInput) => (
    <div className="div">
        <label>
            {label}
        </label>
        {
            type === "number" ? 
                <input type={type} maxLength={2} placeholder={label} onChange={(e) => onChange(e.target.value)} />:
                <input type={type} placeholder={label} onChange={(e) => onChange(e.target.value)} />
            
        }
    </div>
)