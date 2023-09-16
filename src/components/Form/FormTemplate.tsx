import { useState } from 'react'
import MainForm from "./MainForm"
import style from './styles/form.module.css'

function FormTemplate() {
  const [clickedLink, setClickedLink] = useState<string>('');
  const [isDefault, setDefaultAnchor] = useState(true);

  const handleDefault = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = e.target as HTMLAnchorElement
    const linkName = element.textContent || ''
    setClickedLink(linkName)
    setDefaultAnchor(false)
  }

  return <>
    <div className={style['form_template']}>
      <div className={style['header_form_div']}>
        <a className={style[isDefault || 'Sign in' === clickedLink ? 'active' : 'header_form_sign']} href="" onClick={handleDefault}>Sign in</a>
        <a className={style['Sign up' === clickedLink ? 'active' : 'header_form_sign']} href="" onClick={handleDefault}>Sign up</a>
      </div>

      {clickedLink === 'Sign up' ? <MainForm tittle="Let's go!" btnText="Register" inputText="text"/>: <MainForm tittle="Welcome back!" btnText="Login" checkbox />}
    </div>

  </>
}

export default FormTemplate