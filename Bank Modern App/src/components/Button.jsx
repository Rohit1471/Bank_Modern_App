function Button({btnClass, btnLink, btnText}){
  return(
    <>
     <div className={`${btnClass}`} >
      <a href={`${btnLink}`}>{btnText}</a>
    </div>
    </>
  )
}

export default Button