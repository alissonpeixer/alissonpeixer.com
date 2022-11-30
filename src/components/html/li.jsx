export const Li = ({ body, customStyle, ...pres }) => {

    const cssCustom = customStyle || ''

    return (
        <li
        className={
          `transition-all hover:text-emerald-300 cursor-pointer  ${cssCustom} `
        }
      >
        <a {...pres}>
            {body}
        </a>
      </li>
    )
}