

export const InputBox =(props) => {
    const {type,className,name,placeholder,lable,handleChange} = props
    return(
         <div>
            <label>
                {lable}
            </label>
            <input
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
            required
          />

         </div>   

    )
} 