import style from './styles/mainForm.module.css';

interface fields {
  inputText?: 'text'
  tittle: string
  checkbox?: boolean
  btnText: string
}

function MainForm(props: fields) {

  const handleDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  
  const handleDefaultAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  }

  return (
    <form action="" className={style['main_form']} onSubmit={handleDefault}>
      <h1>{props.tittle}</h1>
      {props.inputText && <label htmlFor="name" >Name</label>}
      {props.inputText && <input type='text' id="name" name="name" placeholder="Enter your name" />}

      <label htmlFor="email" >Email</label>
      <input type='email' id="email" name="email" placeholder="Enter your email" />

      <label htmlFor="password" >Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" />

      {props.checkbox && <div className={style['div_container_checkbox']}>
        <div>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">remember me</label>
        </div>
        <a href="" title="change your password" onClick={handleDefaultAnchor}>Forgot password?</a>
      </div>}
      
      <button type="submit">{props.btnText}</button>
    </form>
  );
}

export default MainForm;
