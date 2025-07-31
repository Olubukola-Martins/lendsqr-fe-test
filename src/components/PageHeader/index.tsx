import "./PageHeader.scss";



const PageHeader:React.FC<{title:string}> = ({title}) => {
  return (
    <p className="title">{title}</p>
  )
}

export default PageHeader