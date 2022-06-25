

export const Button = (props)=>{

    const {type,className,handleClick,btnLabelText} = props;

    return(
        <>
            <button type={type} onClick={handleClick} className={className}>{btnLabelText}</button>
        </>
    )
}