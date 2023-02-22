import { createContext, useState } from "react"

export const StepValue = createContext()
const ContextProvider = ({children}) => {
    const [step, setStep] = useState(1);
    return (
        <>
            <StepValue.Provider value={step}>{children}</StepValue.Provider>
        </>
    )
}
export default ContextProvider